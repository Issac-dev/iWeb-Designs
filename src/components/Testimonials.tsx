import { Card, CardContent } from "./ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "James A.",
    company: "Adika Stakes",
    text: "Working with iWeb Designs was a game changer. Our new site looks amazing and brought in more leads.",
  },
  {
    name: "Linda M.",
    company: "Autos Mechanic",
    text: "Professional, responsive, and creative. They understood our vision and exceeded expectations.",
  },
  {
    name: "Chris D.",
    company: "Improved Home",
    text: "Our visitors love the new layout — simple, clean, and professional. Great experience all through.",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-primary font-semibold mb-2">Client Testimonials</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:border-primary transition-all duration-300 hover-lift">
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-primary/30 mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.text}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
