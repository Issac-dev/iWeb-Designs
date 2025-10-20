import { Code, Palette, Sparkles, Settings, TrendingUp } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: Code,
    title: "Web Design & Development",
    description: "Beautiful, responsive sites built for results.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Seamless user experiences that engage and convert.",
  },
  {
    icon: Sparkles,
    title: "Branding & Visual Identity",
    description: "Build a digital identity that stands out.",
  },
  {
    icon: Settings,
    title: "Website Maintenance",
    description: "Keep your site updated, secure, and fast.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Optimization",
    description: "Get found faster, rank higher, perform better.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-primary font-semibold mb-2">Our Services</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to <span className="text-primary">Succeed Online</span>
          </h2>
          <p className="text-muted-foreground">
            From design to development, we offer comprehensive solutions to elevate your digital
            presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-border hover:border-primary transition-all duration-300 hover-lift group"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
