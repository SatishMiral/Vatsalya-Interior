import { useState, useEffect } from 'react';
import { motion} from 'framer-motion';
// import { Compass, Phone, Mail, Instagram, ChevronRight, Star, Users, Home, Building2 } from 'lucide-react';

function Hero(){
    const [currentIndex, setCurrentIndex] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  
  const heroImages = [
    // 'Assets/FAMILY WALL.jpg',
    // 'Assets/sofa.jpg',
    // 'Assets/TV FRONT.jpg',
    // 'Assets/mandir.jpg'
    'https://www.decorilla.com/online-decorating/wp-content/uploads/2023/12/Modern-interior-design-ideas-2025-by-Decorilla-scaled.jpeg',
    'https://www.hindustantimes.com/ht-img/img/2024/09/20/550x309/Home_1726802836584_1726802837761.png',
    'https://mojoboutique.com/cdn/shop/articles/what_interior_design_style_uses_plants_1344x.jpg?v=1710240081',
    'https://evolveindia.co/wp-content/uploads/2021/07/1_The-Wooden-Rhapsody-Modern-Bedroom-Interior-Design.jpg'
  ];

  useEffect(() => {
    // Set a small timeout to mark the end of first load
    const firstLoadTimer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 100);

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    },4000);

    return () => {
      clearInterval(timer);
      clearTimeout(firstLoadTimer);
    };
  }, []);

  // Animation variants with conditional initial state
  const slideVariants = {
    enter: {
      x: '100%',
      opacity: 0
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: {
      x: '-100%',
      opacity: 0
    }
  };

  return(
    <div className="h-screen relative overflow-hidden">
        {/* Image Container */}
        <motion.div
          key={currentIndex}
          initial={isFirstLoad ? "center" : "enter"}
          animate="center"
          exit="exit"
          variants={slideVariants}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center w-full h-full"
            style={{ 
              backgroundImage: `url('${heroImages[currentIndex]}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </motion.div>

      {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-bold mb-6 text-center"
          >
            Vatsalya Interior
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl text-center max-w-2xl mb-8"
          >
            Creating timeless interiors that inspire and elevate your daily living
          </motion.p>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-white scale-100' : 'bg-white/50 scale-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
  )
}

export default Hero