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

        {/* Desktop: Single uploadable image placeholder - 1704x192 */}
        <div 
          className="hidden lg:flex w-full bg-secondary/50 rounded-2xl border-2 border-dashed border-muted-foreground/30 items-center justify-center cursor-pointer hover:bg-secondary/70 transition-colors mx-auto"
          style={{ maxWidth: '1704px', height: '192px' }}
        >
          <div className="text-center text-muted-foreground">
            <p className="text-sm font-medium">Brand Logos Image</p>
            <p className="text-xs">1704 × 192 px</p>
          </div>
        </div>

        {/* Mobile: Horizontal scrolling brand logos */}
        <div className="lg:hidden overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-4">
            {/* Placeholder brand logos for mobile */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="shrink-0 w-20 h-20 bg-secondary/50 rounded-xl border-2 border-dashed border-muted-foreground/30 flex items-center justify-center"
              >
                <span className="text-xs text-muted-foreground">Logo</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;