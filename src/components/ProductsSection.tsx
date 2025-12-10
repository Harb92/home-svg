import ProductCard from "./ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductsSection = () => {
  /* 
    Product cards data - supports up to 20 cards
    Each card requires:
    - id: unique identifier
    - logo: brand logo text
    - description: card description text
    - frontImage: front side image (recommended size: 280px × 400px)
    - backImage: back side image (recommended size: 280px × 400px)
  */
  const products = [
    {
      id: 1,
      logo: "🔵*",
      description: "Upgrade your shopping game.",
      frontImage: undefined, // Upload product 1 front image — 280px × 400px
      backImage: undefined,  // Upload product 1 back image — 280px × 400px
    },
    {
      id: 2,
      logo: "valu* cards",
      description: "Effortless payments & exclusive perks",
      frontImage: undefined, // Upload product 2 front image — 280px × 400px
      backImage: undefined,  // Upload product 2 back image — 280px × 400px
    },
    {
      id: 3,
      logo: "SHOP'IT*",
      description: "Smarter shopping, bigger rewards",
      frontImage: undefined, // Upload product 3 front image — 280px × 400px
      backImage: undefined,  // Upload product 3 back image — 280px × 400px
    },
    {
      id: 4,
      logo: "SONARA*",
      description: "Next-level experiences await",
      frontImage: undefined, // Upload product 4 front image — 280px × 400px
      backImage: undefined,  // Upload product 4 back image — 280px × 400px
    },
    {
      id: 5,
      logo: "VALU+",
      description: "Premium benefits unlocked",
      frontImage: undefined, // Upload product 5 front image — 280px × 400px
      backImage: undefined,  // Upload product 5 back image — 280px × 400px
    },
    // Add more products as needed (up to 20 cards supported)
    // {
    //   id: 6,
    //   logo: "BRAND*",
    //   description: "Your description here",
    //   frontImage: undefined, // Upload product 6 front image — 280px × 400px
    //   backImage: undefined,  // Upload product 6 back image — 280px × 400px
    // },
  ];

  return (
    <section className="py-12 lg:py-20 bg-[#F4F7F7]">
      <div className="px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
          {/* Left side - Text content */}
          <div className="lg:w-[300px] lg:shrink-0 mb-8 lg:mb-0">
            {/* Products badge */}
            <span className="inline-block px-4 py-1.5 text-xs font-medium text-[#345451] bg-white rounded-full mb-4 border border-[#E5E7EB]">
              Products
            </span>
            
            {/* Main heading */}
            <h2 className="text-2xl lg:text-4xl font-bold text-[#0C1D1C] leading-tight uppercase">
              DISCOVER THE<br />
              VALU IN EVERY<br />
              MOMENT
            </h2>
          </div>

          {/* Right side - Carousel */}
          <div className="flex-1 lg:overflow-hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {products.map((product) => (
                  <CarouselItem key={product.id} className="pl-4 basis-auto">
                    <ProductCard
                      id={product.id}
                      logo={product.logo}
                      description={product.description}
                      frontImage={product.frontImage}
                      backImage={product.backImage}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Navigation arrows - Hidden on mobile, shown on desktop */}
              <div className="hidden lg:block">
                <CarouselPrevious className="left-0 -translate-x-1/2 bg-white border-none shadow-lg" />
                <CarouselNext className="right-0 translate-x-1/2 bg-white border-none shadow-lg" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
