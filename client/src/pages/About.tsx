import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Shield, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4" data-testid="text-about-title">About Budget Bundles</h1>
          <p className="text-lg text-muted-foreground" data-testid="text-about-subtitle">
            Your trusted platform for affordable data bundles and services
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Who We Are
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground" data-testid="text-who-we-are">
                Budget Bundles is a leading provider of affordable data bundle services in Ghana. 
                We partner with major telecommunications networks including MTN, AirtelTigo, and Telecel 
                to bring you the best deals on internet data packages.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Delivery Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground" data-testid="text-delivery-time">
                After completing your purchase, packages typically take <strong>30 minutes to a few hours</strong> to 
                reflect in your account. We process all orders as quickly as possible to ensure you stay connected.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Why Choose Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground" data-testid="text-why-choose-us">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Affordable Prices:</strong> Get the best rates on data bundles across all networks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Non-Expiring Packages:</strong> All our bundles come with non-expiry validity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Secure Payments:</strong> Powered by Paystack for safe and reliable transactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>24/7 Support:</strong> Reach out to us anytime via WhatsApp for assistance</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
