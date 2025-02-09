import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";
import { useState } from "react";
import { Sparkles } from 'lucide-react';

const pricingPlans = [
  {
    title: "Basic",
    price: { monthly: "19", yearly: "15" },
    features: ["1 User", "5GB Storage", "Basic Support", "Limited API Access", "Standard Analytics"],
  },
  {
    title: "Pro",
    price: { monthly: "49", yearly: "45" },
    features: ["5 Users", "50GB Storage", "Priority Support", "Full API Access", "Advanced Analytics"],
    highlight: true,
    popular: true,
  },
  {
    title: "Enterprise",
    price: { monthly: "99", yearly: "90" },
    features: ["Unlimited Users", "500GB Storage", "24/7 Premium Support", "Custom Integrations", "AI-Powered Insights"],
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 px-6 w-full">
      <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase text-green-500">
          PRIX
        </h2>
      <h2 className="text-3xl font-semibold text-center mb-6">Choisissez le meilleurs plan pour vos besoins</h2>
      <div className="flex items-center gap-2 mb-6">
        <span>Mensuelement</span>
        <Switch className="data-[state=checked]:bg-green-500" checked={isYearly} onCheckedChange={setIsYearly} />
        <span>Annuelement</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.title}
            className={`relative p-6 rounded-2xl shadow-md transition-transform hover:scale-105 w-full min-h-[400px] flex flex-col justify-between ${
              plan.highlight ? "border-2 border-red-500 md:scale-105 shadow-lg hover:scale-110" : ""
            }`}
          >
            {plan.popular && (
              <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 leading-none">
            <Sparkles className="w-4 h-4" />
              Populaire
            </span>
            )}
            <div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-center">{plan.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-6xl font-bold text-center mb-4">{isYearly ? plan.price.yearly : plan.price.monthly}
                  <span className="text-xs text-gray-500">€/mois</span>
                </p>
                {isYearly && (
                  <span className="text-xs text-gray-400 flex items-center">Payer annullement</span>
                )}
                <ul className="space-y-2 mb-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                      <Check className="w-4 h-4 text-red-500" /> {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>
            <Button className={`w-full mt-4 ${plan.highlight ? "bg-red-500 text-white hover:bg-red-600" : ""}`}>Subscribe</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
