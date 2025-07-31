import Hero from "@/components/Hero";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Home = () => {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Business Owner",
      text: "Walid delivered an amazing website that exceeded our expectations. Professional and timely!",
      rating: 5,
    },
    {
      name: "Mohamed Khaled",
      role: "Startup Founder",
      text: "The dashboard he built transformed our business operations. Highly recommended!",
      rating: 5,
    },
    {
      name: "Fatima Ben Ali",
      role: "Marketing Director",
      text: "Outstanding work on our landing page. The design is modern and conversion-focused.",
      rating: 5,
    },
  ];

  const stats = [
    { icon: Users, value: "50+", label: "Happy Clients" },
    { icon: Star, value: "100+", label: "Projects Completed" },
    { icon: Clock, value: "3+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Stats Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What I Can Do For You</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From simple landing pages to complex full-stack applications, I deliver quality solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <Card className="p-8 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">🌐</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Landing Pages</h3>
              <p className="text-muted-foreground mb-4">Beautiful, conversion-focused landing pages that capture leads and drive sales.</p>
              <div className="text-primary font-medium">Starting at 300 TND</div>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Admin Dashboards</h3>
              <p className="text-muted-foreground mb-4">Powerful dashboards with analytics, user management, and business insights.</p>
              <div className="text-primary font-medium">Starting at 1000 TND</div>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Full-Stack Apps</h3>
              <p className="text-muted-foreground mb-4">Complete web applications with backend, database, and modern frontend.</p>
              <div className="text-primary font-medium">Starting at 2000 TND</div>
            </Card>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-gradient-primary">
              <Link to="/services" className="flex items-center gap-2">
                View All Services
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Don't just take my word for it - here's what my clients think.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-background/50 backdrop-blur-sm">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your ideas and bring them to life with beautiful, functional web solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary">
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link to="/services">Browse Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;