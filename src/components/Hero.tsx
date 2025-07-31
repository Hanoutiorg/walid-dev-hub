import { Link } from "react-router-dom";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      {/* 3D Floating Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full transform-3d"
        animate={{ 
          y: [-10, 10, -10], 
          rotateX: [0, 360, 0],
          rotateY: [0, 180, 360] 
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full transform-3d"
        animate={{ 
          y: [10, -15, 10], 
          rotateX: [360, 0, 360],
          rotateZ: [0, 180, 0] 
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <div className={`container mx-auto px-4 text-center relative z-10 ${isRTL ? 'rtl' : ''}`}>
        <div className="max-w-4xl mx-auto">
          {/* Main Heading with 3D Animation */}
          <motion.h1 
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 transform-3d"
          >
            {t('hero.title').split(' ').slice(0, 1)}{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t('hero.title').split(' ')[1]}
            </span>
            <br />
            {t('hero.title').split(' ').slice(2).join(' ')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons with 3D Hover */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6">
                <Link to="/services" className="flex items-center gap-2">
                  {t('hero.exploreServices')}
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotateY: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                <Link to="/portfolio">
                  {t('hero.viewPortfolio')}
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Quick Stats with 3D Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Code, title: t('feature.cleanCode.title'), desc: t('feature.cleanCode.desc') },
              { icon: Palette, title: t('feature.modernDesign.title'), desc: t('feature.modernDesign.desc') },
              { icon: Zap, title: t('feature.fastDelivery.title'), desc: t('feature.fastDelivery.desc') }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="transform-3d"
              >
                <Card className="p-6 bg-surface/50 backdrop-blur-sm border border-border/50 hover:shadow-card transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary mb-4 mx-auto" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;