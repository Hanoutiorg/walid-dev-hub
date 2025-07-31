import Hero from "@/components/Hero";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

// Animation variants for staggering children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  // --- Data defined directly in the component ---

  const testimonials = [
    {
      name: "Amina Cherif",
      role: "Lead Designer",
      text: "Working with them was a game-changer for our online presence. They perfectly captured our brand's essence and delivered a stunning, high-performance website. Their professionalism and attention to detail are second to none.",
      rating: 5,
    },
    {
      name: "Youssef Maaloul",
      role: "Head of Innovation",
      text: "I'm consistently impressed by their technical expertise and collaborative spirit. They took our complex requirements and turned them into a seamless, user-friendly mobile application. A reliable and highly skilled partner.",
      rating: 5,
    },
    {
      name: "Ines Bouzid",
      role: "Founder",
      text: "The new e-commerce platform they built for me is not only beautiful but also incredibly efficient. My sales have increased by 40% in the first quarter alone! I couldn't be happier with the results and the supportive process.",
      rating: 5,
    },
  ];

  const stats = [
    { icon: Users, value: "50+", label: "Happy Clients" },
    { icon: Star, value: "100+", label: "Projects Completed" },
    { icon: Clock, value: "3+", label: "Years of Experience" },
  ];

  const services = [
    {
      icon: "🌐",
      title: "Landing Pages",
      desc: "Stunning, fast, and responsive landing pages that convert visitors into customers.",
      price: "300 TND",
    },
    {
      icon: "📊",
      title: "Admin Dashboards",
      desc: "Powerful and intuitive dashboards to manage your data and operations effectively.",
      price: "1000 TND",
    },
    {
      icon: "⚡",
      title: "Full-Stack Applications",
      desc: "Complete, scalable web solutions from front-end to back-end, tailored to your needs.",
      price: "2000 TND",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />

      {/* Stats Section */}
      <motion.section
        className="py-20 bg-muted/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} className="text-center" variants={itemVariants}>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Preview */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We build high-quality digital solutions to help your business grow.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12 [perspective:1000px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants} className="h-full">
                <Card className="p-8 text-center h-full transition-all duration-300 transform-style-3d hover:shadow-2xl hover:shadow-primary/20">
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-2xl text-white">{service.icon}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.desc}</p>
                    <div className="text-primary font-medium">Starting at {service.price}</div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-gradient-primary">
                <Link to="/services" className="flex items-center gap-2">
                  View All Services
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="py-20 bg-muted/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Real stories from people we've helped achieve their goals.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto [perspective:1000px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants} className="transform-style-3d">
                <motion.div whileHover={{ y: -10, rotateX: 10 }}>
                  <Card className="p-6 bg-background/50 backdrop-blur-sm h-full">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    {/* FIXED: Using direct properties `testimonial.text` and `testimonial.role` */}
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's talk about how we can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-primary">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline">
                  <Link to="/services">Browse Services</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;