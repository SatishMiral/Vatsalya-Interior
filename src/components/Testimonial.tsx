import { motion} from 'framer-motion'
import { Star } from 'lucide-react';

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

function Testimonial(){
    return(
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
    )
}

export default Testimonial