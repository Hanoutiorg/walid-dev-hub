import { useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for an e-commerce platform with real-time analytics, order management, and inventory tracking.",
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Restaurant Landing Page",
      description: "Modern, responsive landing page for a local restaurant with online menu, reservation system, and location details.",
      category: "frontend",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Full-stack productivity app with team collaboration, project tracking, and deadline management features.",
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "Express", "PostgreSQL", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Personal portfolio website for a photographer showcasing their work with elegant galleries and contact forms.",
      category: "frontend",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Learning Management System",
      description: "Educational platform with course management, student progress tracking, and interactive learning modules.",
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 6,
      title: "Fitness Tracker App",
      description: "Mobile-first web app for tracking workouts, nutrition, and fitness goals with social features.",
      category: "frontend",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      technologies: ["React", "PWA", "Chart.js", "Local Storage"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "frontend", label: "Frontend" },
    { value: "fullstack", label: "Full-Stack" },
  ];

  const filteredProjects = projects.filter(project => 
    filter === "all" || project.category === filter
  );

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            My{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and projects. Each project represents a unique challenge 
            and demonstrates my commitment to delivering high-quality, functional solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredProjects
              .filter(project => project.featured)
              .slice(0, 2)
              .map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-card transition-all duration-300">
                  <div className="relative group">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Button size="sm" variant="secondary">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="secondary">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <Badge className="bg-gradient-primary text-white">Featured</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <div className="relative group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <Button size="sm" variant="secondary">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-3 right-3 bg-gradient-primary text-white">
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-subtle rounded-2xl p-8 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Impressed by What You See?</h2>
          <p className="text-muted-foreground mb-6">
            Ready to start your own project? Let's discuss your ideas and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline">
              View More on GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;