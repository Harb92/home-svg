const BrandsSection = () => {
  return (
    <section className="py-16 lg:py-20 px-6 lg:px-20 bg-background">
      <div className="max-w-[1704px] mx-auto">
        {/* Single uploadable image placeholder - 1704x192 */}
        <div 
          className="w-full h-48 bg-secondary/50 rounded-2xl border-2 border-dashed border-muted-foreground/30 flex items-center justify-center cursor-pointer hover:bg-secondary/70 transition-colors"
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
