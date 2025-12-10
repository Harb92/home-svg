const BrandsSection = () => {
  return (
    <section className="py-12 lg:py-20 px-6 lg:px-20 bg-background">
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
          {/* Left gradient fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          
          {/* Right gradient fade */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Row 1 - Scrolls LEFT */}
          <div className="h-[48px] mb-[24px] overflow-hidden">
            <div className="flex animate-scroll-left">
              {/* Image placeholder - Replace src with uploaded brand logos image */}
              <div className="h-[48px] min-w-[1440px] bg-secondary/50 flex items-center justify-center border border-dashed border-muted-foreground/30">
                <span className="text-xs text-muted-foreground">Brand Logos Image (48px × 1440px+)</span>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="h-[48px] min-w-[1440px] bg-secondary/50 flex items-center justify-center border border-dashed border-muted-foreground/30">
                <span className="text-xs text-muted-foreground">Brand Logos Image (48px × 1440px+)</span>
              </div>
            </div>
          </div>

          {/* Row 2 - Scrolls RIGHT */}
          <div className="h-[48px] mb-[24px] overflow-hidden">
            <div className="flex animate-scroll-right">
              {/* Image placeholder - Replace src with uploaded brand logos image */}
              <div className="h-[48px] min-w-[1440px] bg-secondary/50 flex items-center justify-center border border-dashed border-muted-foreground/30">
                <span className="text-xs text-muted-foreground">Brand Logos Image (48px × 1440px+)</span>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="h-[48px] min-w-[1440px] bg-secondary/50 flex items-center justify-center border border-dashed border-muted-foreground/30">
                <span className="text-xs text-muted-foreground">Brand Logos Image (48px × 1440px+)</span>
              </div>
            </div>
          </div>

          {/* Row 3 - Scrolls LEFT */}
          <div className="h-[48px] overflow-hidden">
            <div className="flex animate-scroll-left">
              {/* Image placeholder - Replace src with uploaded brand logos image */}
              <div className="h-[48px] min-w-[1440px] bg-secondary/50 flex items-center justify-center border border-dashed border-muted-foreground/30">
                <span className="text-xs text-muted-foreground">Brand Logos Image (48px × 1440px+)</span>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="h-[48px] min-w-[1440px] bg-secondary/50 flex items-center justify-center border border-dashed border-muted-foreground/30">
                <span className="text-xs text-muted-foreground">Brand Logos Image (48px × 1440px+)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Simplified animated view */}
        <div className="lg:hidden w-full overflow-hidden relative">
          {/* Left gradient fade */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          
          {/* Right gradient fade */}
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Row 1 - Scrolls LEFT */}
          <div className="h-[40px] mb-[16px] overflow-hidden">
            <div className="flex animate-scroll-left-mobile">
              <div className="h-[40px] min-w-[400px] bg-secondary/50 flex items-center justify-center border border-dashed border-muted-foreground/30 rounded-lg">
                <span className="text-xs text-muted-foreground">Brand Logos</span>
              </div>
              <div className="h-[40px] min-w-[400px] bg-secondary/50 flex items-center justify-center border border-dashed border-muted-foreground/30 rounded-lg">
                <span className="text-xs text-muted-foreground">Brand Logos</span>
              </div>
            </div>
          </div>

          {/* Row 2 - Scrolls RIGHT */}
          <div className="h-[40px] mb-[16px] overflow-hidden">
            <div className="flex animate-scroll-right-mobile">
              <div className="h-[40px] min-w-[400px] bg-secondary/50 flex items-center justify-center border border-dashed border-muted-foreground/30 rounded-lg">
                <span className="text-xs text-muted-foreground">Brand Logos</span>
              </div>
              <div className="h-[40px] min-w-[400px] bg-secondary/50 flex items-center justify-center border border-dashed border-muted-foreground/30 rounded-lg">
                <span className="text-xs text-muted-foreground">Brand Logos</span>
              </div>
            </div>
          </div>

          {/* Row 3 - Scrolls LEFT */}
          <div className="h-[40px] overflow-hidden">
            <div className="flex animate-scroll-left-mobile">
              <div className="h-[40px] min-w-[400px] bg-secondary/50 flex items-center justify-center border border-dashed border-muted-foreground/30 rounded-lg">
                <span className="text-xs text-muted-foreground">Brand Logos</span>
              </div>
              <div className="h-[40px] min-w-[400px] bg-secondary/50 flex items-center justify-center border border-dashed border-muted-foreground/30 rounded-lg">
                <span className="text-xs text-muted-foreground">Brand Logos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
