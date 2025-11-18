import { useEffect, useState } from "react";
import { Gift, X } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function PromoModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleRedeem = () => {
    const whatsappLink = "https://wa.me/233206557715?text=Hi!%20I%20want%20to%20redeem%20my%20loyalty%20bonus";
    window.open(whatsappLink, "_blank");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md overflow-hidden p-0" data-testid="dialog-promo">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          data-testid="button-close-promo"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-background p-6 pb-4">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/20 p-4 rounded-full">
              <Gift className="h-12 w-12 text-primary" />
            </div>
          </div>
          
          <DialogHeader className="text-center space-y-3">
            <DialogTitle className="text-2xl sm:text-3xl font-bold">
              Budget Bundles
            </DialogTitle>
            <DialogDescription className="text-xl sm:text-2xl font-semibold text-primary">
              Loyalty Bonus Just for You!
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-6 pb-6 pt-4 space-y-6">
          <div className="bg-muted/50 rounded-lg p-4 border border-border">
            <p className="text-center text-sm sm:text-base leading-relaxed">
              Buy at least <span className="font-bold text-primary">2GB of data every day</span> for{" "}
              <span className="font-bold text-primary">5 days in a row</span> and get{" "}
              <span className="font-bold text-chart-3 text-lg">1GB FREE</span> on Day 6 on us!
            </p>
          </div>

          <p className="text-center text-muted-foreground text-sm">
            Keep bundling and enjoy the rewards.
          </p>

          <Button
            onClick={handleRedeem}
            className="w-full gap-2 h-12 text-base font-semibold"
            size="lg"
            data-testid="button-redeem"
          >
            <SiWhatsapp className="h-5 w-5" />
            Redeem on WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
