import { Compass } from 'lucide-react';

function Nav(){
    return(
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
    )
}

export default Nav