import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const products = [
    {
      title: "Upgrade your",
      subtitle: "shopping",
      description: "Shop it with Valu, 0% interest finance on over 9000+ brands.",
      logo: "🟠 valu",
      bgColor: "#EAF0F0",
      isImageCard: false,
    },
    {
      title: "",
      subtitle: "",
      description: "Get the essentials at 0.5 mil partnership & pay at ease.",
      logo: "valu cards*",
      bgColor: "#0891b2",
      isImageCard: true,
    },
    {
      title: "",
      subtitle: "",
      description: "Shop now pay later from over 9000+ brands.",
      logo: "SHOP IT*",
      bgColor: "#14b8a6",
      isImageCard: true,
    },
    {
      title: "",
      subtitle: "",
      description: "Spark your moments with instant financing.",
      logo: "valu",
      bgColor: "#06b6d4",
      isImageCard: true,
    },
  ];

  return (
    <section className="py-8 lg:py-12 bg-background">
      <div className="px-6 lg:px-20">
        {/* Products badge and heading */}
        <div className="mb-6 lg:mb-8">
          <span className="inline-block px-3 py-1 text-xs font-medium text-muted-foreground bg-secondary rounded-full mb-3">
            Products
          </span>
          <h3 className="text-xl lg:text-3xl font-bold text-foreground leading-tight max-w-xs">
            DISCOVER THE VALU IN EVERY MOMENT
          </h3>
        </div>
      </div>

      {/* Scrollable products */}
      <div className="flex gap-4 lg:gap-6 overflow-x-auto px-6 lg:px-20 pb-6 scrollbar-hide snap-x snap-mandatory">
        {products.map((product, index) => (
          <div key={index} className="snap-start shrink-0 w-[260px] lg:w-[280px]">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;