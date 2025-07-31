import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, DollarSign, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t, isRTL } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("price");

  const services = [
    {
      id: 1,
      titleKey: "services.item.landingPage.title",
      descriptionKey: "services.item.landingPage.desc",
      category: "frontend",
      price: { tnd: "300-500", usd: "100-150" },
      deliveryKey: "services.item.landingPage.delivery",
      features: [
        t("services.item.landingPage.feature1"),
        t("services.item.landingPage.feature2"),
        t("services.item.landingPage.feature3"),
        t("services.item.landingPage.feature4"),
      ],
      icon: "🌐",
      popular: false,
    },
    {
      id: 2,
      titleKey: "services.item.ecommerce.title",
      descriptionKey: "services.item.ecommerce.desc",
      category: "fullstack",
      price: { tnd: "1500-3000", usd: "500-1000" },
      deliveryKey: "services.item.ecommerce.delivery",
      features: [
        t("services.item.ecommerce.feature1"),
        t("services.item.ecommerce.feature2"),
        t("services.item.ecommerce.feature3"),
        t("services.item.ecommerce.feature4"),
      ],
      icon: "🛒",
      popular: true,
    },
    {
      id: 3,
      titleKey: "services.item.dashboard.title",
      descriptionKey: "services.item.dashboard.desc",
      category: "fullstack",
      price: { tnd: "1000-2000", usd: "300-600" },
      deliveryKey: "services.item.dashboard.delivery",
      features: [
        t("services.item.dashboard.feature1"),
        t("services.item.dashboard.feature2"),
        t("services.item.dashboard.feature3"),
        t("services.item.dashboard.feature4"),
      ],
      icon: "📊",
      popular: false,
    },
    {
      id: 4,
      titleKey: "services.item.portfolio.title",
      descriptionKey: "services.item.portfolio.desc",
      category: "frontend",
      price: { tnd: "400-800", usd: "120-250" },
      deliveryKey: "services.item.portfolio.delivery",
      features: [
        t("services.item.portfolio.feature1"),
        t("services.item.portfolio.feature2"),
        t("services.item.portfolio.feature3"),
        t("services.item.portfolio.feature4"),
      ],
      icon: "🎨",
      popular: false,
    },
    {
      id: 5,
      titleKey: "services.item.webapp.title",
      descriptionKey: "services.item.webapp.desc",
      category: "fullstack",
      price: { tnd: "2000-5000", usd: "600-1500" },
      deliveryKey: "services.item.webapp.delivery",
      features: [
        t("services.item.webapp.feature1"),
        t("services.item.webapp.feature2"),
        t("services.item.webapp.feature3"),
        t("services.item.webapp.feature4"),
      ],
      icon: "⚡",
      popular: true,
    },
    {
      id: 6,
      titleKey: "services.item.uiux.title",
      descriptionKey: "services.item.uiux.desc",
      category: "design",
      price: { tnd: "600-1200", usd: "200-400" },
      deliveryKey: "services.item.uiux.delivery",
      features: [
        t("services.item.uiux.feature1"),
        t("services.item.uiux.feature2"),
        t("services.item.uiux.feature3"),
        t("services.item.uiux.feature4"),
      ],
      icon: "🎯",
      popular: false,
    },
  ];

  const filteredServices = services.filter(service => 
    filter === "all" || service.category === filter
  );

  const categories = [
    { value: "all", label: t("services.filter.all") },
    { value: "frontend", label: t("services.filter.frontend") },
    { value: "fullstack", label: t("services.filter.fullstack") },
    { value: "design", label: t("services.filter.design") },
  ];
  
  // Logic for sorting if you want to implement it
  // This is a basic example; you might need more complex logic for price ranges or delivery times
  const sortedServices = [...filteredServices].sort((a, b) => {
    if (sortBy === 'popular') {
      return b.popular - a.popular;
    }
    if (sortBy === 'price') {
      const priceA = parseInt(a.price.tnd.split('-')[0], 10);
      const priceB = parseInt(b.price.tnd.split('-')[0], 10);
      return priceA - priceB;
    }
    // Add logic for delivery time if needed
    return 0;
  });


  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t('services.pageTitle')}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.pageSubtitle')}
          </p>
        </div>

        {/* Filters */}
        <div className={`flex flex-col sm:flex-row gap-4 mb-12 max-w-2xl mx-auto ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
          <Select value={filter} onValueChange={setFilter} dir={isRTL ? 'rtl' : 'ltr'}>
            <SelectTrigger className="w-full sm:flex-1">
              <SelectValue placeholder={t('services.filter.placeholder')} />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy} dir={isRTL ? 'rtl' : 'ltr'}>
            <SelectTrigger className="w-full sm:flex-1">
              <SelectValue placeholder={t('services.sort.placeholder')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price">{t('services.sort.price')}</SelectItem>
              <SelectItem value="delivery">{t('services.sort.delivery')}</SelectItem>
              <SelectItem value="popular">{t('services.sort.popular')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {sortedServices.map((service) => (
            <Card key={service.id} className="relative flex flex-col p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-2">
              {service.popular && (
                <Badge className={`absolute -top-2 ${isRTL ? '-left-2' : '-right-2'} bg-gradient-primary text-primary-foreground`}>
                  {t('services.item.popular')}
                </Badge>
              )}
              
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{t(service.titleKey)}</h3>
                <p className="text-muted-foreground text-sm h-20">{t(service.descriptionKey)}</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{t('services.item.priceLabel')}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-primary">{service.price.tnd} TND</div>
                    <div className="text-xs text-muted-foreground">${service.price.usd}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{t('services.item.deliveryLabel')}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{t(service.deliveryKey)}</span>
                </div>
              </div>

              <div className="mb-6 flex-grow">
                <h4 className="font-medium mb-3">{t('services.item.includedTitle')}</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 mt-auto">
                <Button asChild className="w-full bg-gradient-primary" size="sm">
                  <Link to={`/request/${service.id}`} className="flex items-center gap-2">
                    {t('services.item.requestQuote')}
                    <ArrowRight className={`w-4 h-4 ${isRTL ? 'transform -scale-x-100' : ''}`} />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full" size="sm">
                  <Link to="/contact">
                    {t('services.item.askQuestion')}
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Custom Service Section */}
        <div className="mt-20 bg-muted/80 rounded-2xl p-8 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{t('services.cta.title')}</h2>
          <p className="text-muted-foreground mb-6">
            {t('services.cta.subtitle')}
          </p>
          <Button asChild size="lg" className="bg-gradient-primary">
            <Link to="/contact">
              {t('services.cta.button')}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;