import Header from "@/components/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const whatsappNumber = "+233 206 557 715";
  const whatsappLink = "https://wa.me/233206557715";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1
            className="text-4xl font-bold mb-4"
            data-testid="text-contact-title"
          >
            Contact Us
          </h1>
          <p
            className="text-lg text-muted-foreground"
            data-testid="text-contact-subtitle"
          >
            Get in touch with us for any questions or support
          </p>
        </div>

        <div className="space-y-6">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FaWhatsapp className="h-6 w-6 text-green-500" />
                WhatsApp Support
              </CardTitle>
              <CardDescription>The fastest way to reach us</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span
                  className="text-lg font-medium"
                  data-testid="text-whatsapp-number"
                >
                  {whatsappNumber}
                </span>
              </div>

              <Button
                className="w-full h-12 bg-green-500 hover:bg-green-600 text-white"
                onClick={() => window.open(whatsappLink, "_blank")}
                data-testid="button-whatsapp"
              >
                <FaWhatsapp className="h-5 w-5 mr-2" />
                Chat on WhatsApp
              </Button>

              <p
                className="text-sm text-muted-foreground text-center"
                data-testid="text-whatsapp-info"
              >
                Available 24/7 for your convenience
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                How Can We Help?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p data-testid="text-help-info">
                  Our support team is ready to assist you with:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Questions about data bundle packages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Payment and transaction support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Delivery status and tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Technical issues and troubleshooting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>General inquiries and feedback</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="bg-muted/50 rounded-lg p-6 text-center">
            <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
            <p
              className="text-sm text-muted-foreground"
              data-testid="text-response-time"
            >
              We typically respond within a few minutes on WhatsApp during
              business hours
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
