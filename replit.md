# Budget Bundles

## Overview
Budget Bundles is a web application for purchasing affordable data bundles for various telecom providers in Ghana. The platform supports MTN, AirtelTigo, and Telecel. Payments are processed through Paystack integration.

## Project Architecture

### Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Express.js + Node.js
- **Database**: PostgreSQL (via Drizzle ORM)
- **Payment**: Paystack
- **UI Components**: Radix UI + Tailwind CSS
- **Form Handling**: React Hook Form + Zod validation

### Project Structure
```
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components (Home, Payment, Recipient)
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utility functions
│   └── index.html
├── server/              # Express backend
│   ├── index.ts         # Main server entry point
│   ├── routes.ts        # API routes
│   ├── storage.ts       # Data storage layer (in-memory)
│   └── vite.ts          # Vite dev server setup
├── shared/              # Shared code between frontend and backend
│   └── schema.ts        # Database schema and types
└── package.json
```

## Recent Changes (November 18, 2025)
- ✅ **External Payment Endpoint**: Added /external endpoint for triggering payments from external websites
  - POST /external receives amount and actual_final_callback URL
  - Creates orders using dedicated pkg-external package for MTN service
  - Uses same Paystack initialization flow as on-site purchases (no difference from Paystack's perspective)
  - Stores external callback URL and marks orders as external
  - Payment verification endpoint detects external orders and sends callbacks for both success AND failed statuses
  - External orders use main site's Paystack callback URL (https://${domain}/success)
  - Returns Paystack initialization response (authorizationUrl, accessCode, reference) to external site
  - Maintains complete backward compatibility with existing on-site orders

## Previous Changes (October 17, 2025)
- ✅ **Paystack Duplicate Reference Fix**: Fixed critical payment amount mismatch causing transaction errors
  - Synchronized frontend and backend amounts (both now apply 2% fee)
  - Added better error handling and logging for Paystack responses
  - Improved button state management to prevent double-click issues
  - Added type="button" attribute to prevent accidental form submissions

## Previous Changes (October 15, 2025)
- ✅ **Mobile Hamburger Menu**: Added slide-in navigation menu for mobile screens
  - Hamburger menu button (three lines icon) appears on mobile devices
  - Sliding sidebar menu from the right with navigation links
  - Auto-closes when a link is clicked for smooth navigation
  - Desktop navigation layout unchanged
- ✅ **Package Data Updated**: Replaced mock packages with real pricing data
  - MTN: 14 packages (1GB - 50GB)
  - Telecel: 6 packages (10GB - 50GB)
  - AirtelTigo: 8 packages (1GB - 20GB)
- ✅ **Site Rebranding**: Changed site name from "Triversa Bundles" to "Budget Bundles"
- ✅ **Services Cleanup**: Removed WASSCE and BECE checker services
- ✅ **Payment Summary Fix**: Updated Payment page package data to match new pricing
- ✅ **Paystack Duplicate Reference Fix**: Enhanced order ID generation with timestamp + nanoid to prevent duplicate transaction errors

## Previous Changes (October 14, 2025)
- ✅ **GitHub Import Setup**: Configured project for Replit environment from fresh GitHub import
- ✅ **Node.js Installation**: Installed Node.js 20 runtime and all dependencies
- ✅ **Vite Configuration**: Updated vite.config.ts to allow all hosts for Replit proxy support
- ✅ **Git Configuration**: Created .gitignore file for Node.js project
- ✅ **Development Workflow**: Set up workflow to run development server on port 5000
- ✅ **Application Testing**: Verified frontend and backend are working correctly
- ✅ **Deployment Configuration**: Configured autoscale deployment with build and start commands
- ✅ **Database Connection**: Verified DATABASE_URL is configured for PostgreSQL
- ✅ **Paystack Integration Complete**: 
  - Added PAYSTACK_SECRET_KEY and VITE_PAYSTACK_PUBLIC_KEY to environment variables (.env file)
  - Created success page (/success) for payment confirmation
  - Configured Paystack callback URL using REPLIT_DEV_DOMAIN
  - Payment flow: Initialize → Paystack modal → Callback verification → Success page
  - Complete error handling with loading, success, and error states
- ✅ **Paystack Callback Fix**: Fixed "callback must be a valid function" error
  - Changed callback from async function to synchronous function
  - Converted async/await pattern to Promise chains (.then/.catch/.finally)
  - Paystack requires callback to return void, not Promise
- ✅ **Environment Setup**: 
  - Installed dotenv package for environment variable loading
  - Added dotenv/config import to server/index.ts
  - Created .gitignore to protect sensitive .env file

## Configuration

### Environment Variables
- `DATABASE_URL` - PostgreSQL database connection string (configured ✓)
- `PAYSTACK_SECRET_KEY` - Paystack API secret key for backend (configured ✓)
- `VITE_PAYSTACK_PUBLIC_KEY` - Paystack public key for frontend (configured ✓)
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)

### Development Server
The app runs on port 5000 with both frontend and backend served from the same Express server:
- Development: Uses Vite dev server with HMR
- Production: Serves static built files

### Database
- Uses Drizzle ORM with PostgreSQL
- Currently using in-memory storage (MemStorage class)
- Migration command: `npm run db:push`

### Payment Integration
- Paystack integration for payment processing
- Supports mobile money payments
- Payment flow: Initialize → Verify

### External Payment API
The `/external` endpoint allows other websites to trigger payments using this platform:

**Request:**
```
POST /external
Content-Type: application/json

{
  "amount": 50.00,
  "actual_final_callback": "https://yoursite.com/payment-callback"
}
```

**Response (Success):**
```json
{
  "status": "success",
  "orderId": "1234567890-abc123",
  "authorizationUrl": "https://checkout.paystack.com/...",
  "accessCode": "abc123xyz",
  "reference": "ref-1234567890-abc123"
}
```

**Callback (sent to actual_final_callback):**
```json
{
  "status": "success",
  "reference": "ref-1234567890-abc123",
  "amount": 51.00,
  "currency": "GHS",
  "transactionDate": "2025-11-18T02:30:00.000Z",
  "channel": "mobile_money"
}
```

**Notes:**
- External orders use the dedicated `pkg-external` package for tracking
- The 2% Paystack fee is automatically applied
- Callbacks are sent for both successful and failed payments
- External orders appear in the same success page as regular orders

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type check
- `npm run db:push` - Push database schema changes

## Services Supported
1. **MTN** - Data bundles (1GB to 50GB)
2. **AirtelTigo** - Data bundles (1GB to 20GB)
3. **Telecel** - Data bundles (10GB to 50GB)

## Key Features
- Service selection interface
- Package browsing and selection
- Recipient phone number entry
- Payment processing via Paystack
- Order tracking
- WhatsApp contact integration

## User Preferences
None documented yet.
