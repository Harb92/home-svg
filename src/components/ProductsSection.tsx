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
    - flipTransitionImage: third image shown during flip animation (recommended size: 280px × 400px)
    
    CMS EDITABLE: All images and text can be updated via CMS dashboard.
  */
  const products = [
    {
      id: 1,
      logo: "🔵*",
      description: "Upgrade your shopping game.",
      frontImage: undefined, // Upload product 1 front image — 280px × 400px
      backImage: undefined,  // Upload product 1 back image — 280px × 400px
      flipTransitionImage: undefined, // Upload product 1 transition image — 280px × 400px
    },
    {
      id: 2,
      logo: "valu* cards",
      description: "Effortless payments & exclusive perks",
      frontImage: undefined, // Upload product 2 front image — 280px × 400px
      backImage: undefined,  // Upload product 2 back image — 280px × 400px
      flipTransitionImage: undefined, // Upload product 2 transition image — 280px × 400px
    },
    {
      id: 3,
      logo: "SHOP'IT*",
      description: "Smarter shopping, bigger rewards",
      frontImage: undefined, // Upload product 3 front image — 280px × 400px
      backImage: undefined,  // Upload product 3 back image — 280px × 400px
      flipTransitionImage: undefined, // Upload product 3 transition image — 280px × 400px
    },
    {
      id: 4,
      logo: "SONARA*",
      description: "Next-level experiences await",
      frontImage: undefined, // Upload product 4 front image — 280px × 400px
      backImage: undefined,  // Upload product 4 back image — 280px × 400px
      flipTransitionImage: undefined, // Upload product 4 transition image — 280px × 400px
    },
    {
      id: 5,
      logo: "VALU+",
      description: "Premium benefits unlocked",
      frontImage: undefined, // Upload product 5 front image — 280px × 400px
      backImage: undefined,  // Upload product 5 back image — 280px × 400px
      flipTransitionImage: undefined, // Upload product 5 transition image — 280px × 400px
    },
    // Add more products as needed (up to 20 cards supported)
    // {
    //   id: 6,
    //   logo: "BRAND*",
    //   description: "Your description here",
    //   frontImage: undefined, // Upload product 6 front image — 280px × 400px
    //   backImage: undefined,  // Upload product 6 back image — 280px × 400px
    //   flipTransitionImage: undefined, // Upload product 6 transition image — 280px × 400px
    // },
  ];

  return (
    <section className="py-12 lg:py-20 bg-[#F4F7F7]">
      <div className="px-6 lg:px-20">
        <div className="relative flex flex-col lg:flex-row lg:items-start lg:gap-16">
          {/* 
            Left side - Text content
            HIGHER Z-INDEX: Cards swipe underneath this section when dragging carousel.
            This creates the visual effect of cards going behind the text area.
          */}
          <div className="lg:w-[300px] lg:shrink-0 mb-8 lg:mb-0 relative z-20 bg-[#F4F7F7]">
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

          {/* 
            Right side - Carousel
            SWIPE BY DRAGGING: No loop, cards end after last item.
            Cards go underneath the left text section when swiping.
          */}
          <div className="flex-1 lg:overflow-visible relative z-10">
            <Carousel
              opts={{
                align: "start",
                loop: false, // NO LOOP - carousel ends after last card
                dragFree: true, // DRAG TO SWIPE - pull left/right to navigate
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
                      flipTransitionImage={product.flipTransitionImage}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Navigation arrows removed - carousel is now swipe/drag only */}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
