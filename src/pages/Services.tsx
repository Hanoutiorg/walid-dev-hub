import { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, Clock, DollarSign, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Services = () => {
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("price");

  const services = [
    {
      id: 1,
      title: "Business Landing Page",
      description: "A professional, conversion-focused landing page designed to showcase your business and capture leads effectively.",
      category: "frontend",
      price: { tnd: "300-500", usd: "100-150" },
      delivery: "2-4 days",
      features: ["Responsive Design", "Contact Forms", "SEO Optimized", "Fast Loading"],
      icon: "🌐",
      popular: false,
    },
    {
      id: 2,
      title: "E-commerce Website",
      description: "Complete online store with product catalog, shopping cart, payment integration, and admin panel.",
      category: "fullstack",
      price: { tnd: "1500-3000", usd: "500-1000" },
      delivery: "1-3 weeks",
      features: ["Product Management", "Payment Gateway", "Order Tracking", "Admin Dashboard"],
      icon: "🛒",
      popular: true,
    },
    {
      id: 3,
      title: "Admin Dashboard",
      description: "Powerful dashboard with analytics, user management, data visualization, and business insights.",
      category: "fullstack",
      price: { tnd: "1000-2000", usd: "300-600" },
      delivery: "1-2 weeks",
      features: ["User Management", "Analytics", "Data Visualization", "Export Features"],
      icon: "📊",
      popular: false,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Stunning portfolio website to showcase your work, skills, and attract potential clients or employers.",
      category: "frontend",
      price: { tnd: "400-800", usd: "120-250" },
      delivery: "3-5 days",
      features: ["Portfolio Gallery", "Contact Forms", "Blog Section", "Mobile Optimized"],
      icon: "🎨",
      popular: false,
    },
    {
      id: 5,
      title: "Web Application",
      description: "Custom web application tailored to your specific business needs with full backend integration.",
      category: "fullstack",
      price: { tnd: "2000-5000", usd: "600-1500" },
      delivery: "2-4 weeks",
      features: ["Custom Features", "Database Design", "API Integration", "User Authentication"],
      icon: "⚡",
      popular: true,
    },
    {
      id: 6,
      title: "UI/UX Design",
      description: "Professional UI/UX design services including wireframes, prototypes, and design systems.",
      category: "design",
      price: { tnd: "600-1200", usd: "200-400" },
      delivery: "1-2 weeks",
      features: ["Wireframes", "Prototypes", "Design System", "User Research"],
      icon: "🎯",
      popular: false,
    },
  ];

  const filteredServices = services.filter(service => 
    filter === "all" || service.category === filter
  );

  const categories = [
    { value: "all", label: "All Services" },
    { value: "frontend", label: "Frontend" },
    { value: "fullstack", label: "Full-Stack" },
    { value: "design", label: "UI/UX Design" },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            My{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional web development services tailored to your needs. From simple landing pages 
            to complex web applications, I deliver quality solutions with modern technologies.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 max-w-2xl mx-auto">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price">Price</SelectItem>
              <SelectItem value="delivery">Delivery Time</SelectItem>
              <SelectItem value="popular">Popularity</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredServices.map((service) => (
            <Card key={service.id} className="relative p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-2">
              {service.popular && (
                <Badge className="absolute -top-2 -right-2 bg-gradient-primary text-white">
                  Popular
                </Badge>
              )}
              
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Price</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-primary">{service.price.tnd} TND</div>
                    <div className="text-xs text-muted-foreground">${service.price.usd}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Delivery</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{service.delivery}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-gradient-primary" size="sm">
                  <Link to={`/request/${service.id}`} className="flex items-center gap-2">
                    Request Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  <Link to="/contact">
                    Ask Questions
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Custom Service Section */}
        <div className="mt-20 bg-gradient-subtle rounded-2xl p-8 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need Something Custom?</h2>
          <p className="text-muted-foreground mb-6">
            Don't see exactly what you're looking for? I offer custom development services 
            tailored to your specific requirements. Let's discuss your project!
          </p>
          <Button size="lg" className="bg-gradient-primary">
            <Link to="/contact">
              Discuss Custom Project
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;