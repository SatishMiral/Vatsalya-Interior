function Portfolio(){
    const portfolioItems = [
        {
          image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
          title: "Modern Minimalist Living Room",
          description: "A blend of comfort and contemporary design"
        },
        {
          image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
          title: "Scandinavian Kitchen",
          description: "Clean lines meet functional elegance"
        },
        {
          image: "https://images.unsplash.com/photo-1616137466211-f939a420be84",
          title: "Luxury Master Bedroom",
          description: "Where comfort meets sophistication"
        }
      ];
    return(
        <div id="portfolio" className="py-24 bg-[#f8f5f2]">
              <div className="max-w-6xl mx-auto px-4">
                <h2 className="font-playfair text-4xl font-semibold text-center mb-4 tracking-elegant">Our Work</h2>
                <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto tracking-wide">A curated selection of our finest projects</p>
                <div className="grid md:grid-cols-3 gap-8">
                  {portfolioItems.map((item, index) => (
                    <div 
                      key={index}
                      className="group relative overflow-hidden rounded-lg cursor-pointer"
                      // onClick={() => setActiveImage(index)}
                    >
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                        <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                          <h3 className="font-playfair text-xl font-medium mb-2 tracking-wide">{item.title}</h3>
                          <p className="text-sm tracking-wide">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
    )
}

export default Portfolio