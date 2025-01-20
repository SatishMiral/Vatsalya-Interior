import { motion} from 'framer-motion'
import { Phone, Mail, Instagram } from 'lucide-react';

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

function Contact(){
    return(
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
    )
}

export default Contact