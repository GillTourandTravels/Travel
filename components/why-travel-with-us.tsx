import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, ClockIcon as ClickTool, Users, Smile } from "lucide-react";

export default function WhyTravelWithUs() {
  const benefits = [
    {
      id: 1,
      title: "Safe Travel",
      description: "Your safety is our priority with certified vehicles",
      icon: Shield,
    },
    {
      id: 2,
      title: "Easy Booking",
      description: "Simple and quick booking process",
      icon: ClickTool,
    },
    {
      id: 3,
      title: "Experienced Team",
      description: "20+ years of experience in tourism",
      icon: Users,
    },
    {
      id: 4,
      title: "Customer Satisfaction",
      description: "99% customer satisfaction rate",
      icon: Smile,
    },
  ];

  return (
    <section id="why-travel" className="py-16 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Why Travel With Us
          </h2>
          <div className="h-1 w-16 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <Card
                key={benefit.id}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/20 rounded-full">
                      <IconComponent size={32} className="text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-primary">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
