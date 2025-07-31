import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Calculator, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const RequestQuote = () => {
  const { id } = useParams();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    deadline: "",
    description: "",
    features: [] as string[],
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    {
      id: 1,
      title: "Business Landing Page",
      price: { tnd: "300-500", usd: "100-150" },
      delivery: "2-4 days",
      features: ["Responsive Design", "Contact Forms", "SEO Optimized", "Fast Loading"],
    },
    {
      id: 2,
      title: "E-commerce Website",
      price: { tnd: "1500-3000", usd: "500-1000" },
      delivery: "1-3 weeks",
      features: ["Product Management", "Payment Gateway", "Order Tracking", "Admin Dashboard"],
    },
    {
      id: 3,
      title: "Admin Dashboard",
      price: { tnd: "1000-2000", usd: "300-600" },
      delivery: "1-2 weeks",
      features: ["User Management", "Analytics", "Data Visualization", "Export Features"],
    },
    {
      id: 4,
      title: "Portfolio Website",
      price: { tnd: "400-800", usd: "120-250" },
      delivery: "3-5 days",
      features: ["Portfolio Gallery", "Contact Forms", "Blog Section", "Mobile Optimized"],
    },
    {
      id: 5,
      title: "Web Application",
      price: { tnd: "2000-5000", usd: "600-1500" },
      delivery: "2-4 weeks",
      features: ["Custom Features", "Database Design", "API Integration", "User Authentication"],
    },
    {
      id: 6,
      title: "UI/UX Design",
      price: { tnd: "600-1200", usd: "200-400" },
      delivery: "1-2 weeks",
      features: ["Wireframes", "Prototypes", "Design System", "User Research"],
    },
  ];

  const service = services.find(s => s.id === parseInt(id || "1"));

  const budgetRanges = [
    "300-500 TND ($100-150)",
    "500-1000 TND ($150-300)",
    "1000-2000 TND ($300-600)",
    "2000-5000 TND ($600-1500)",
    "5000+ TND ($1500+)",
    "I need a custom quote",
  ];

  const additionalFeatures = [
    "Multi-language support",
    "Advanced animations",
    "Third-party integrations",
    "Advanced SEO optimization",
    "Real-time notifications",
    "Advanced security features",
    "Custom admin panel",
    "Mobile app integration",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Quote Request Sent!",
      description: "Thank you! I'll review your request and get back to you within 24 hours with a detailed quote.",
    });
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link to="/services" className="inline-flex items-center gap-2 text-primary hover:underline mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          <h1 className="text-4xl font-bold mb-4">
            Request Quote for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {service.title}
            </span>
          </h1>
          <p className="text-muted-foreground">
            Tell me about your project requirements and I'll provide a detailed quote within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Quote Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h2 className="text-xl font-bold mb-4">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+216 XX XXX XXX"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company (Optional)</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h2 className="text-xl font-bold mb-4">Project Details</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range *</Label>
                        <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range}>
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="deadline">Preferred Deadline</Label>
                        <Input
                          id="deadline"
                          name="deadline"
                          type="date"
                          value={formData.deadline}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Project Description *</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe your project in detail. What are your goals, target audience, specific requirements, etc."
                        rows={6}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Features */}
                <div>
                  <h2 className="text-xl font-bold mb-4">Additional Features</h2>
                  <p className="text-muted-foreground mb-4">
                    Select any additional features you'd like to include:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {additionalFeatures.map((feature) => (
                      <label
                        key={feature}
                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                          formData.features.includes(feature)
                            ? "border-primary bg-primary/5"
                            : "border-border hover:bg-surface"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.features.includes(feature)}
                          onChange={() => handleFeatureToggle(feature)}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                          formData.features.includes(feature)
                            ? "border-primary bg-primary"
                            : "border-border"
                        }`}>
                          {formData.features.includes(feature) && (
                            <CheckCircle className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <span className="text-sm">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending Request..." : "Send Quote Request"}
                </Button>
              </form>
            </Card>
          </div>

          {/* Service Summary */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">Service Summary</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">{service.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calculator className="w-4 h-4" />
                    <span>{service.price.tnd} TND / ${service.price.usd}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{service.delivery}</span>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-medium mb-2">Included Features:</h5>
                  <ul className="space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-subtle">
              <h3 className="font-bold mb-3">What Happens Next?</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                    1
                  </div>
                  <span>I'll review your requirements within 24 hours</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                    2
                  </div>
                  <span>You'll receive a detailed quote and timeline</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                    3
                  </div>
                  <span>We'll schedule a call to discuss details</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                    4
                  </div>
                  <span>Project kickoff and development begins</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3">Questions?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Need to discuss your project before requesting a quote?
              </p>
              <Button variant="outline" className="w-full">
                <Link to="/contact">Contact Me First</Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;