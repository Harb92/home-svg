const BrandsSection = () => {
  const brands = [
    "Samsung", "LG", "Xiaomi", "Oppo", "Vivo", "Realme",
    "HP", "Dell", "Lenovo", "Apple", "Sony", "Panasonic",
    "Bosch", "Philips", "Canon", "Nikon", "JBL", "Marshall",
    "Nike", "Adidas", "Puma", "Under Armour", "Skechers", "New Balance"
  ];

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

        {/* Brands Grid */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 lg:gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 lg:p-6 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors cursor-pointer group"
            >
              <span className="text-xs lg:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
