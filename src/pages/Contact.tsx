import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      description: "Send me an email",
      value: "walid@waliddev.com",
      action: "mailto:walid@waliddev.com",
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Let's have a call",
      value: "+216 XX XXX XXX",
      action: "tel:+216XXXXXXX",
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Based in Tunisia",
      value: "Tunis, Tunisia",
      action: "#",
    },
  ];

  const socialLinks = [
    { name: "WhatsApp", icon: "💬", url: "#", color: "bg-green-500" },
    { name: "LinkedIn", icon: "💼", url: "#", color: "bg-blue-600" },
    { name: "GitHub", icon: "🐙", url: "#", color: "bg-gray-800" },
    { name: "Twitter", icon: "🐦", url: "#", color: "bg-blue-400" },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Get In{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your project? Have a question? I'd love to hear from you. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Send me a message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or ask any questions..."
                    rows={6}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Quick Response */}
            <Card className="p-6 bg-gradient-subtle">
              <div className="text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Quick Response</h3>
                <p className="text-sm text-muted-foreground">
                  I typically respond within 2-4 hours during business hours
                </p>
              </div>
            </Card>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.action}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-surface transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                    <p className="text-sm font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="flex items-center gap-3 p-3 rounded-lg border hover:shadow-sm transition-all"
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span className="font-medium text-sm">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <Card className="p-6">
              <div className="text-center">
                <MessageCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Available for Projects</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Currently accepting new projects and collaborations
                </p>
                <Button className="w-full bg-gradient-primary">
                  Schedule a Call
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="font-bold mb-3">How long does a typical project take?</h3>
              <p className="text-muted-foreground text-sm">
                Project timelines vary based on complexity. Simple landing pages take 2-4 days, 
                while complex web applications can take 2-4 weeks.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-3">Do you provide ongoing support?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! I offer post-launch support and maintenance services to ensure your 
                website continues to perform optimally.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-3">What's your payment process?</h3>
              <p className="text-muted-foreground text-sm">
                I typically work with 50% upfront and 50% upon completion. For larger projects, 
                we can discuss milestone-based payments.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-3">Can you work with my existing team?</h3>
              <p className="text-muted-foreground text-sm">
                Absolutely! I'm experienced in collaborating with designers, project managers, 
                and other developers to deliver great results.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;