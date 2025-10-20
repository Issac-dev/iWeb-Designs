import aboutImage from "@/assets/about-illustration.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl hover-lift">
              <img
                src={aboutImage}
                alt="Creative team at work"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h3 className="text-primary font-semibold mb-2">About iWeb Designs</h3>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Design that speaks. <br />
                <span className="text-primary">Websites that perform.</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At iWeb Designs, we create stunning, performance-driven websites for ambitious
                brands. Our focus is simple — combine creative design with smart functionality to
                help businesses grow online.
              </p>
              <p>
                Whether it's a portfolio, a company site, or an eCommerce platform, we design each
                project with clarity, purpose, and measurable impact.
              </p>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="font-semibold text-foreground">
                Trusted by brands across industries to deliver creative, effective web solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
