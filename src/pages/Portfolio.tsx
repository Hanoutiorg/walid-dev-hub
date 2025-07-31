import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const { t, isRTL } = useLanguage();

  // Define data inside the component to access the `t` function
  const projects = [
    {
      id: 1,
      titleKey: "project.digitalGuide.title",
      descriptionKey: "project.digitalGuide.desc",
      category: "fullstack",
      image: "/images/digital-guide.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Mongoose", "Tailwind CSS"],
      liveUrl: "https://example.com/digital-guide", // Replace with real URL
      githubUrl: "https://github.com/your-username/digital-guide", // Replace with real URL
      featured: true,
    },
    {
      id: 2,
      titleKey: "project.curvesSmiles.title",
      descriptionKey: "project.curvesSmiles.desc",
      category: "frontend",
      image: "/images/curves-smiles.jpg",
      technologies: ["Django Templates", "HTMX", "JavaScript", "Three.js", "CSS"],
      liveUrl: "https://example.com/curves-smiles", // Replace with real URL
      githubUrl: "https://github.com/your-username/curves-smiles", // Replace with real URL
      featured: false,
    },
    {
      id: 3,
      titleKey: "project.truckManagement.title",
      descriptionKey: "project.truckManagement.desc",
      category: "fullstack",
      image: "/images/truck-management.jpg",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://example.com/truck-management", // Replace with real URL
      githubUrl: "https://github.com/your-username/truck-management", // Replace with real URL
      featured: true,
    },
    {
      id: 4,
      titleKey: "project.collabSmile.title",
      descriptionKey: "project.collabSmile.desc",
      category: "frontend",
      image: "/images/collabsmile.jpg",
      technologies: ["React Native", "Expo", "Django REST", "Tailwind CSS"],
      liveUrl: "https://example.com/collabsmile", // Replace with real URL
      githubUrl: "https://github.com/your-username/collabsmile", // Replace with real URL
      featured: false,
    },
    {
      id: 5,
      titleKey: "project.goZone.title",
      descriptionKey: "project.goZone.desc",
      category: "fullstack",
      image: "/images/gozone.jpg",
      technologies: ["Django", "JavaScript", "CSS"],
      liveUrl: "https://example.com/gozone", // Replace with real URL
      githubUrl: "https://github.com/your-username/gozone", // Replace with real URL
      featured: false,
    },
    {
      id: 6,
      titleKey: "project.koora.title",
      descriptionKey: "project.koora.desc",
      category: "fullstack",
      image: "/images/koora-analytics.jpg",
      technologies: ["Django", "Django REST", "CSS"],
      liveUrl: "https://example.com/koora-analytics", // Replace with real URL
      githubUrl: "https://github.com/your-username/koora-analytics", // Replace with real URL
      featured: false,
    },
  ];

  const categories = [
    { value: "all", label: t("portfolio.filter.all") },
    { value: "frontend", label: t("portfolio.filter.frontend") },
    { value: "fullstack", label: t("portfolio.filter.fullstack") },
  ];

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter
  );

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('portfolio.title.part1')}{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t('portfolio.title.part2')}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('portfolio.pageSubtitle')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${isRTL ? "flex-row-reverse" : ""}`}>
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={filter === category.value ? "default" : "outline"}
              onClick={() => setFilter(category.value)}
              className={filter === category.value ? "bg-gradient-primary" : ""}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">{t('portfolio.featured.title')}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredProjects
              .filter((p) => p.featured)
              .slice(0, 2)
              .map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-card transition-all duration-300">
                  <div className="relative group">
                    <img
                      src={project.image}
                      alt={t(project.titleKey)}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Button asChild size="sm" variant="secondary">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" /> {t('portfolio.liveDemo')}
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="secondary">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" /> {t('portfolio.code')}
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold">{t(project.titleKey)}</h3>
                      <Badge className="bg-gradient-primary text-primary-foreground">{t('portfolio.featured')}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4 h-24">{t(project.descriptionKey)}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </section>

        {/* All Projects Grid */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">{t('portfolio.all.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={t(project.titleKey)}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                     <Button asChild size="icon" variant="secondary">
                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><Eye className="w-4 h-4" /></a>
                     </Button>
                     <Button asChild size="icon" variant="secondary">
                       <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github className="w-4 h-4" /></a>
                     </Button>
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-3 right-3 bg-gradient-primary text-primary-foreground">{t('portfolio.featured')}</Badge>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{t(project.titleKey)}</h3>
                  <p className="text-muted-foreground text-sm mb-3 h-24">{t(project.descriptionKey)}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">{tech}</Badge>
                    ))}
                    {project.technologies.length > 3 && <Badge variant="secondary" className="text-xs">+{project.technologies.length - 3}</Badge>}                  
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-20 bg-muted/80 rounded-2xl p-8 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{t('portfolio.cta.title')}</h2>
          <p className="text-muted-foreground mb-6">{t('portfolio.cta.subtitle')}</p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? "sm:flex-row-reverse" : ""}`}>
            <Button asChild size="lg" className="bg-gradient-primary">
              <Link to="/contact">{t('portfolio.cta.start')}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">{t('portfolio.cta.github')}</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;