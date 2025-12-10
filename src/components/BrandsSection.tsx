const BrandsSection = () => {
  return (
    <section className="py-16 lg:py-20 px-6 lg:px-20 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
            YOUR SHOPPING <span className="text-primary">PARADISE</span>
          </h2>
          <p className="text-muted-foreground">
            Explore Valu's vast network of over 9000 brands and discover your new favorites.
          </p>
        </div>

        {/* Single uploadable image placeholder - 1704x192 */}
        <div 
          className="w-full bg-secondary/50 rounded-2xl border-2 border-dashed border-muted-foreground/30 flex items-center justify-center cursor-pointer hover:bg-secondary/70 transition-colors mx-auto"
          style={{ maxWidth: '1704px', height: '192px' }}
        >
          <div className="text-center text-muted-foreground">
            <p className="text-sm font-medium">Brand Logos Image</p>
            <p className="text-xs">1704 × 192 px</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
