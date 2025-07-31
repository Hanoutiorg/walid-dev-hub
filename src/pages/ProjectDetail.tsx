import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ArrowLeft, Users, Briefcase } from "lucide-react"; // Added new icons

const ProjectDetail = () => {
  const { projectId } = useParams();
  const { t, isRTL } = useLanguage();

  const project = projects.find((p) => p.slug === projectId);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back to Portfolio Link */}
        <Link
          to="/portfolio"
          className={`inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 ${isRTL ? "flex-row-reverse" : ""}`}
        >
          <ArrowLeft className="w-4 h-4" />
          {t('projectDetail.back')}
        </Link>

        {/* Project Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{t(project.titleKey)}</h1>
          <p className="text-lg text-muted-foreground">{t(project.descriptionKey)}</p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Column: Image and Description */}
          <div className="lg:col-span-2">
            <div className="mb-8 shadow-lg rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={t(project.titleKey)}
                className="w-full object-cover"
              />
            </div>
            
            <h2 className="text-2xl font-bold mb-4">{t('projectDetail.about')}</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed mb-8">
              <p>{t(project.longDescriptionKey)}</p>
            </div>

            {/* --- NEW: My Contribution Section --- */}
            {project.contributionKey && (
              <div>
                <h2 className="text-2xl font-bold mb-4">My Contribution</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                  <p>{t(project.contributionKey)}</p>
                </div>
              </div>
            )}
            {/* --- END: My Contribution Section --- */}
          </div>

          {/* Sidebar Column: Details */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-muted/50 p-6 rounded-lg">
              
              {/* --- NEW: Role & Collaboration Section --- */}
              {(project.roleKey || project.collaboration) && (
                <div className="mb-6 border-b pb-6">
                  {project.roleKey && (
                    <div className="flex items-start gap-3 mb-3">
                      <Briefcase className="w-5 h-5 mt-1 text-primary flex-shrink-0"/>
                      <div>
                        <h4 className="font-semibold">My Role</h4>
                        <p className="text-sm text-muted-foreground">{t(project.roleKey)}</p>
                      </div>
                    </div>
                  )}
                  {project.collaboration && (
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 mt-1 text-primary flex-shrink-0"/>
                      <div>
                        <h4 className="font-semibold">Collaboration</h4>
                        <p className="text-sm text-muted-foreground">
                          {project.collaboration.url ? (
                            <a href={project.collaboration.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                              {project.collaboration.name}
                            </a>
                          ) : (
                            <span>{project.collaboration.name}</span>
                          )}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {/* --- END: Role & Collaboration Section --- */}

              <h3 className="text-xl font-bold mb-4">{t('projectDetail.techStack')}</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary">{tech}</Badge>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4">{t('projectDetail.links')}</h3>
              <div className="flex flex-col gap-3">
                {project.liveUrl && (
                  <Button asChild className="w-full bg-gradient-primary">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" /> {t('portfolio.liveDemo')}
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                   <Button asChild variant="outline" className="w-full">
                     <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                       <Github className="w-4 h-4 mr-2" /> {t('portfolio.code')}
                     </a>
                   </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Screenshot Gallery */}
        {project.gallery && project.gallery.length > 0 && (
            <div className="mt-16">
                <h2 className="text-3xl font-bold text-center mb-8">{t('projectDetail.gallery')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {project.gallery.map((imgSrc, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-md border">
                            <img src={imgSrc} alt={`${t(project.titleKey)} screenshot ${index + 1}`} className="w-full h-full object-cover"/>
                        </div>
                    ))}
                </div>
            </div>
        )}

      </div>
    </div>
  );
};

export default ProjectDetail;