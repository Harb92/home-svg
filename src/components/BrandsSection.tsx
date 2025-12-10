import brandLogos from "@/assets/brand-logos.png";

const BrandsSection = () => {
  return (
    <section className="py-12 lg:py-20 px-6 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-xl lg:text-3xl font-bold text-foreground mb-2 lg:mb-3">
            YOUR SHOPPING <span className="text-primary">PARADISE</span>
          </h2>
          <p className="text-sm lg:text-base text-muted-foreground max-w-md mx-auto">
            Explore Valu's vast network of over 9000 brands and discover your new favorites.
          </p>
        </div>

        {/* 
          BRAND LOGOS IMAGE UPLOAD INSTRUCTIONS:
          ========================================
          Upload ONE image that will be repeated across 3 animated rows.
          
          Recommended image specs:
          - Height: 48px
          - Width: Full width (1440px or wider for seamless looping)
          - Format: PNG with transparent background preferred
          
          The uploaded image will automatically:
          1. Display in 3 horizontal rows
          2. Animate with alternating scroll directions (left, right, left)
          3. Loop seamlessly and continuously
        */}

        {/* Desktop: Animated 3-row brand logos - 1440px × 192px */}
        <div 
          className="hidden lg:block w-full mx-auto relative overflow-hidden"
          style={{ maxWidth: '1440px', height: '192px' }}
        >
          {/* Left gradient fade - subtle */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white/60 to-transparent z-10 pointer-events-none" />
          
          {/* Right gradient fade - subtle */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white/60 to-transparent z-10 pointer-events-none" />

          {/* Row 1 - Scrolls LEFT */}
          <div className="h-[48px] mb-[24px] overflow-hidden">
            <div className="flex w-fit animate-scroll-left">
              <img src={brandLogos} alt="Brand logos" className="h-[48px] w-auto object-contain" />
              <img src={brandLogos} alt="Brand logos" className="h-[48px] w-auto object-contain" />
            </div>
          </div>

          {/* Row 2 - Scrolls RIGHT */}
          <div className="h-[48px] mb-[24px] overflow-hidden">
            <div className="flex w-fit animate-scroll-right">
              <img src={brandLogos} alt="Brand logos" className="h-[48px] w-auto object-contain" />
              <img src={brandLogos} alt="Brand logos" className="h-[48px] w-auto object-contain" />
            </div>
          </div>

          {/* Row 3 - Scrolls LEFT */}
          <div className="h-[48px] overflow-hidden">
            <div className="flex w-fit animate-scroll-left">
              <img src={brandLogos} alt="Brand logos" className="h-[48px] w-auto object-contain" />
              <img src={brandLogos} alt="Brand logos" className="h-[48px] w-auto object-contain" />
            </div>
          </div>
        </div>

        {/* Mobile: Simplified animated view */}
        <div className="lg:hidden w-full overflow-hidden relative">
          {/* Left gradient fade - subtle */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/60 to-transparent z-10 pointer-events-none" />
          
          {/* Right gradient fade - subtle */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/60 to-transparent z-10 pointer-events-none" />

          {/* Row 1 - Scrolls LEFT */}
          <div className="h-[32px] mb-[12px] overflow-hidden">
            <div className="flex w-fit animate-scroll-left-mobile">
              <img src={brandLogos} alt="Brand logos" className="h-[32px] w-auto object-contain" />
              <img src={brandLogos} alt="Brand logos" className="h-[32px] w-auto object-contain" />
            </div>
          </div>

          {/* Row 2 - Scrolls RIGHT */}
          <div className="h-[32px] mb-[12px] overflow-hidden">
            <div className="flex w-fit animate-scroll-right-mobile">
              <img src={brandLogos} alt="Brand logos" className="h-[32px] w-auto object-contain" />
              <img src={brandLogos} alt="Brand logos" className="h-[32px] w-auto object-contain" />
            </div>
          </div>

          {/* Row 3 - Scrolls LEFT */}
          <div className="h-[32px] overflow-hidden">
            <div className="flex w-fit animate-scroll-left-mobile">
              <img src={brandLogos} alt="Brand logos" className="h-[32px] w-auto object-contain" />
              <img src={brandLogos} alt="Brand logos" className="h-[32px] w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
