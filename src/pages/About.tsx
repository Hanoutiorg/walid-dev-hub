import { Code, Database, Globe, Smartphone, Users, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    { category: "Frontend", icon: Globe, items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"] },
    { category: "Backend", icon: Database, items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"] },
    { category: "Mobile", icon: Smartphone, items: ["React Native", "Flutter", "Ionic", "Progressive Web Apps"] },
    { category: "Tools", icon: Code, items: ["Git", "Docker", "AWS", "Vercel", "Figma"] },
  ];

  const achievements = [
    { icon: Users, title: "50+ Happy Clients", description: "Delivered successful projects across various industries" },
    { icon: Award, title: "100% Client Satisfaction", description: "Maintained perfect rating with timely delivery" },
    { icon: Code, title: "3+ Years Experience", description: "Continuous learning and adapting to new technologies" },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Walid
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I'm a passionate full-stack developer from Tunisia, specializing in creating beautiful, 
            functional web applications that solve real-world problems. With over 3 years of experience, 
            I help businesses and entrepreneurs bring their digital visions to life.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-6">My Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My journey into web development started during my computer science studies, 
                where I discovered the perfect blend of creativity and logic that programming offers. 
                What began as curiosity quickly became a passion.
              </p>
              <p>
                Over the years, I've worked with clients ranging from small startups to established 
                businesses, helping them establish their online presence and streamline their operations 
                through custom web solutions.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating user experiences that 
                not only look great but also perform exceptionally well. Every project is an 
                opportunity to learn something new and deliver something amazing.
              </p>
            </div>
          </div>

          <div className="bg-gradient-subtle rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎓</span>
                <span>Computer Science Graduate</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌍</span>
                <span>Based in Tunisia</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💼</span>
                <span>3+ Years of Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span>Fast Turnaround Time</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🗣️</span>
                <span>Fluent in Arabic, French & English</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">Achievements & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Working Process */}
        <div className="bg-gradient-subtle rounded-2xl p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">My Working Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <h4 className="font-semibold mb-2">Discovery</h4>
              <p className="text-sm text-muted-foreground">Understanding your needs and goals</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <h4 className="font-semibold mb-2">Design</h4>
              <p className="text-sm text-muted-foreground">Creating wireframes and mockups</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <h4 className="font-semibold mb-2">Development</h4>
              <p className="text-sm text-muted-foreground">Building with clean, scalable code</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <h4 className="font-semibold mb-2">Delivery</h4>
              <p className="text-sm text-muted-foreground">Testing, optimization, and launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;