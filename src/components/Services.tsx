import { motion} from 'framer-motion'
import { ChevronRight, Users, Home, Building2 } from 'lucide-react';

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
  
function Services(){
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
    return(
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
    )
}

export default Services