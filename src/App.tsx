import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Compass, Phone, Mail, Instagram, ChevronRight, Star, Users, Home, Building2 } from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const App = () => {
  const [activeImage, setActiveImage] = useState(0);
  
  const portfolioItems = [
    {
      image: "/api/placeholder/800/600",
      title: "Modern Minimalist Living Room",
      description: "A blend of comfort and contemporary design"
    },
    {
      image: "/api/placeholder/800/600",
      title: "Scandinavian Kitchen",
      description: "Clean lines meet functional elegance"
    },
    {
      image: "/api/placeholder/800/600",
      title: "Luxury Master Bedroom",
      description: "Where comfort meets sophistication"
    }
  ];

  const serviceItems = [
    {
      icon: Home,
      title: "Residential Design",
      description: "Transform your home into a sanctuary that reflects your personal style and needs."
    },
    {
      icon: Building2,
      title: "Commercial Spaces",
      description: "Create inspiring workplaces that boost productivity and impress clients."
    },
    {
      icon: Users,
      title: "Consultation",
      description: "Expert advice to guide your interior design decisions and projects."
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Compass className="w-6 h-6" />
            <span className="text-xl font-semibold">Vatsalya Interior</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-gray-600 hover:text-black transition-colors">Services</a>
            <a href="#portfolio" className="text-gray-600 hover:text-black transition-colors">Portfolio</a>
            <a href="#contact" className="text-gray-600 hover:text-black transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="h-screen relative bg-gray-900 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('./Assets/IMG_2269.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariant}
          className="absolute inset-0 flex flex-col justify-center items-center text-white px-4"
        >
          <motion.div variants={fadeInUp}>
            <Compass className="w-16 h-16 mb-6" />
          </motion.div>
          <motion.h1 
            variants={fadeInUp}
            className="text-6xl font-bold mb-6 text-center"
          >
            Vatsalya Interior
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-2xl text-center max-w-2xl mb-8"
          >
            Creating timeless interiors that inspire and elevate your daily living
          </motion.p>
          <motion.a 
            variants={fadeInUp}
            href="#portfolio" 
            className="border border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300"
          >
            View Our Work
          </motion.a>
        </motion.div>
      </div>


      {/* Services Section */}
{/* Services Section */}
<div id="services" className="py-24 px-4 bg-gray-900 text-white">
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={containerVariant}
    className="max-w-6xl mx-auto"
  >
    <motion.h2 
      variants={fadeInUp}
      className="text-4xl font-bold text-center mb-4"
    >
      Our Services
    </motion.h2>
    <motion.p 
      variants={fadeInUp}
      className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
    >
      Transforming spaces with precision and passion
    </motion.p>
    <motion.div 
      variants={containerVariant}
      className="grid md:grid-cols-3 gap-12"
    >
      {serviceItems.map((service, index) => {
        const Icon = service.icon;

        // Set a unique background image for each service item
        const backgroundImages = [
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80',
        ];

        return (
          <motion.div 
            key={index}
            variants={fadeInUp}
            className="group p-8 border border-gray-700 hover:border-gray-500 transition-all duration-300 rounded-lg relative overflow-hidden"
          >
            {/* Background Image (Visible only on hover of the container) */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              style={{
                backgroundImage: `url(${backgroundImages[index]})`,
              }}
            ></div>
            
            {/* Service Content (Text remains visible during hover) */}
            <div className="relative z-10"> 
              <Icon className="w-8 h-8 mb-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                {service.description}
              </p>
              <a href="#contact" className="inline-flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  </motion.div>
</div>



      {/* Portfolio Section */}
      <div id="portfolio" className="py-24 bg-gray-50">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariant}
          className="max-w-6xl mx-auto px-4"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-4"
          >
            Our Work
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
          >
            A curated selection of our finest projects
          </motion.p>
          <motion.div 
            variants={containerVariant}
            className="grid md:grid-cols-3 gap-8"
          >
            {portfolioItems.map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setActiveImage(index)}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Testimonial Section */}
      <div className="py-24 px-4 bg-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariant}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp}>
            <Star className="w-8 h-8 mx-auto mb-8 text-gray-700" />
          </motion.div>
          <motion.blockquote 
            variants={fadeInUp}
            className="text-2xl italic mb-8 text-gray-800"
          >
            "Vatsalya Interior transformed our house into a stunning modern home that perfectly reflects our style. Their attention to detail and professional approach made the entire process a joy."
          </motion.blockquote>
          <motion.cite 
            variants={fadeInUp}
            className="text-gray-600"
          >
            — Sarah Johnson, Homeowner
          </motion.cite>
        </motion.div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-gray-50 py-24 px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariant}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-4"
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
          >
            Let's discuss your vision
          </motion.p>
          <motion.div 
            variants={containerVariant}
            className="flex flex-col md:flex-row justify-center items-center gap-12"
          >
            <motion.a 
              variants={fadeInUp}
              href="tel:+1234567890" 
              className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+1 (234) 567-890</span>
            </motion.a>
            <motion.a 
              variants={fadeInUp}
              href="mailto:hello@vatsalyainterior.com" 
              className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>hello@vatsalyainterior.com</span>
            </motion.a>
            <motion.a 
              variants={fadeInUp}
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@vatsalyainterior</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500 text-sm border-t border-gray-200">
        <p>© 2024 Vatsalya Interior. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;