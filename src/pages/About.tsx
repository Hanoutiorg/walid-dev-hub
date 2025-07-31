import { Code, Database, Globe, Smartphone, Users, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t, isRTL } = useLanguage();

  const skills = [
    { category: t('about.skills.frontend'), icon: Globe, items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"] },
    { category: t('about.skills.backend'), icon: Database, items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"] },
    { category: t('about.skills.mobile'), icon: Smartphone, items: ["React Native", "Flutter", "Ionic", "Progressive Web Apps"] },
    { category: t('about.skills.tools'), icon: Code, items: ["Git", "Docker", "AWS", "Vercel", "Figma"] },
  ];

  const achievements = [
    { icon: Users, titleKey: "about.achievements.a1.title", descriptionKey: "about.achievements.a1.desc" },
    { icon: Award, titleKey: "about.achievements.a2.title", descriptionKey: "about.achievements.a2.desc" },
    { icon: Code, titleKey: "about.achievements.a3.title", descriptionKey: "about.achievements.a3.desc" },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t('about.pageTitle')}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t('about.pageSubtitle')}
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 max-w-6xl mx-auto items-center">
          <div className={isRTL ? "lg:order-2" : ""}>
            <h2 className="text-3xl font-bold mb-6">{t('about.story.title')}</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>{t('about.story.p1')}</p>
              <p>{t('about.story.p2')}</p>
              <p>{t('about.story.p3')}</p>
            </div>
          </div>

          <div className={`bg-muted/50 rounded-2xl p-8 ${isRTL ? "lg:order-1" : ""}`}>
            <h3 className="text-2xl font-bold mb-6">{t('about.facts.title')}</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎓</span>
                <span>{t('about.facts.f1')}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌍</span>
                <span>{t('about.facts.f2')}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💼</span>
                <span>{t('about.facts.f3')}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span>{t('about.facts.f4')}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🗣️</span>
                <span>{t('about.facts.f5')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">{t('about.skills.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-center mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.items.map((item, itemIndex) => (
                    <Badge key={itemIndex} variant="secondary" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">{t('about.achievements.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t(achievement.titleKey)}</h3>
                <p className="text-muted-foreground">{t(achievement.descriptionKey)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Working Process */}
        <div className="bg-muted/50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{t('about.process.title')}</h2>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px -translate-y-6 bg-border" />
            <div className="relative text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10 relative">1</div>
              <h4 className="font-semibold mb-2">{t('about.process.step1.title')}</h4>
              <p className="text-sm text-muted-foreground">{t('about.process.step1.desc')}</p>
            </div>
            <div className="relative text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10 relative">2</div>
              <h4 className="font-semibold mb-2">{t('about.process.step2.title')}</h4>
              <p className="text-sm text-muted-foreground">{t('about.process.step2.desc')}</p>
            </div>
            <div className="relative text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10 relative">3</div>
              <h4 className="font-semibold mb-2">{t('about.process.step3.title')}</h4>
              <p className="text-sm text-muted-foreground">{t('about.process.step3.desc')}</p>
            </div>
            <div className="relative text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10 relative">4</div>
              <h4 className="font-semibold mb-2">{t('about.process.step4.title')}</h4>
              <p className="text-sm text-muted-foreground">{t('about.process.step4.desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;