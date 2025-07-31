import { Link } from "react-router-dom";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Crafting{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Beautiful
            </span>
            <br />
            Web Experiences
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Full-Stack Developer specializing in React, Node.js, and modern web technologies.
            <br />
            Bringing your ideas to life with clean code and stunning design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6">
              <Link to="/services" className="flex items-center gap-2">
                Explore Services
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
              <Link to="/portfolio">
                View Portfolio
              </Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Card className="p-6 bg-surface/50 backdrop-blur-sm border border-border/50 hover:shadow-card transition-all duration-300">
              <Code className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Clean Code</h3>
              <p className="text-muted-foreground">Writing maintainable, scalable, and efficient code</p>
            </Card>
            
            <Card className="p-6 bg-surface/50 backdrop-blur-sm border border-border/50 hover:shadow-card transition-all duration-300">
              <Palette className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Modern Design</h3>
              <p className="text-muted-foreground">Creating beautiful, responsive user interfaces</p>
            </Card>
            
            <Card className="p-6 bg-surface/50 backdrop-blur-sm border border-border/50 hover:shadow-card transition-all duration-300">
              <Zap className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">Quick turnaround without compromising quality</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;