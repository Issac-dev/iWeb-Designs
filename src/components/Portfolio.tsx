import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import adikaImage from "@/assets/portfolio-adika.jpg";
import autosImage from "@/assets/portfolio-autos.jpg";
import homeImage from "@/assets/portfolio-home.jpg";

const projects = [
  {
    title: "Adika Stakes",
    description: "Sleek eCommerce design for a luxury product brand.",
    image: adikaImage,
    link: "#",
  },
  {
    title: "Autos Mechanic",
    description: "Automotive service website with integrated booking system.",
    image: autosImage,
    link: "#",
  },
  {
    title: "Improved Home",
    description: "Real estate and home improvement website with smooth navigation.",
    image: homeImage,
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-primary font-semibold mb-2">Our Work</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recent <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground">
            Explore our latest work and see how we've helped businesses transform their online
            presence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:border-primary transition-all duration-300 hover-lift cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <a
                    href={project.link}
                    className="text-white flex items-center gap-2 font-semibold"
                  >
                    View Project <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
