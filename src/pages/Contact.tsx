import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  MessageCircle,
  Linkedin,
  Github,
  Twitter,
  MessageSquare // For WhatsApp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t, isRTL } = useLanguage();
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
      title: t('contact.toast.success.title'),
      description: t('contact.toast.success.description'),
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
      title: t('contact.info.email.title'),
      description: t('contact.info.email.desc'),
      value: "oueslatiwalid41@gmail.com",
      action: "mailto:oueslatiwalid41@gmail.com", // Corrected link
    },
    {
      icon: Phone,
      title: t('contact.info.phone.title'),
      description: t('contact.info.phone.desc'),
      value: "+216 53 311 225",
      action: "tel:+21653311225",
    },
    {
      icon: MapPin,
      title: t('contact.info.location.title'),
      description: t('contact.info.location.desc'),
      value: "Tunis, Tunisia",
      action: "#",
    },
  ];

  const socialLinks = [
    { 
      name: "WhatsApp", 
      Icon: MessageSquare, 
      url: "https://wa.me/21653311225" // Real WhatsApp link
    },
    { 
      name: "LinkedIn", 
      Icon: Linkedin, 
      url: "https://linkedin.com/in/your-profile" // Replace with your URL
    },
    { 
      name: "GitHub", 
      Icon: Github, 
      url: "https://github.com/your-username" // Replace with your URL
    },
    { 
      name: "Twitter", 
      Icon: Twitter, 
      url: "https://twitter.com/your-username" // Replace with your URL
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            {t('contact.title.part1')}{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t('contact.title.part2')}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className={`lg:col-span-2 ${isRTL ? 'lg:order-2' : ''}`}>
            <Card className="p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">{t('contact.form.title')}</h2>
                <p className="text-muted-foreground">
                  {t('contact.form.subtitle')}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('contact.form.name.label')}</Label>
                    <Input
                      id="name" name="name" value={formData.name} onChange={handleChange}
                      placeholder={t('contact.form.name.placeholder')} required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('contact.form.email.label')}</Label>
                    <Input
                      id="email" name="email" type="email" value={formData.email} onChange={handleChange}
                      placeholder={t('contact.form.email.placeholder')} required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">{t('contact.form.subject.label')}</Label>
                  <Input
                    id="subject" name="subject" value={formData.subject} onChange={handleChange}
                    placeholder={t('contact.form.subject.placeholder')} required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t('contact.form.message.label')}</Label>
                  <Textarea
                    id="message" name="message" value={formData.message} onChange={handleChange}
                    placeholder={t('contact.form.message.placeholder')} rows={6} required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-primary" disabled={isSubmitting}>
                  {isSubmitting ? (
                    t('contact.form.button.sending')
                  ) : (
                    <>
                      <Send className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {t('contact.form.button.send')}
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div className={`space-y-8 ${isRTL ? 'lg:order-1' : ''}`}>
            <Card className="p-6 bg-muted/50">
              <div className="text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">{t('contact.info.response.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('contact.info.response.desc')}</p>
              </div>
            </Card>

            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">{t('contact.info.title')}</h3>
              {contactInfo.map((info, index) => (
                <a key={index} href={info.action} className="flex items-center gap-4 p-4 rounded-lg hover:bg-surface transition-colors">
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

            <div>
              <h3 className="text-xl font-bold mb-4">{t('contact.socials.title')}</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:shadow-sm transition-all"
                  >
                    <link.Icon className="w-5 h-5 text-muted-foreground" />
                    <span className="font-medium text-sm">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <Card className="p-6">
              <div className="text-center">
                <MessageCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">{t('contact.availability.title')}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t('contact.availability.desc')}</p>
                <Button className="w-full bg-gradient-primary">{t('contact.availability.button')}</Button>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('contact.faq.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="font-bold mb-3">{t('contact.faq.q1.title')}</h3>
              <p className="text-muted-foreground text-sm">{t('contact.faq.q1.desc')}</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-3">{t('contact.faq.q2.title')}</h3>
              <p className="text-muted-foreground text-sm">{t('contact.faq.q2.desc')}</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-3">{t('contact.faq.q3.title')}</h3>
              <p className="text-muted-foreground text-sm">{t('contact.faq.q3.desc')}</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-3">{t('contact.faq.q4.title')}</h3>
              <p className="text-muted-foreground text-sm">{t('contact.faq.q4.desc')}</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;