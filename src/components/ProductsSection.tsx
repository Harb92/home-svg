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
    /* 
      PRODUCTS SECTION
      Figma dimensions: Content area 1440px × 521px
      Cards: 280px × 402px with 32px border-radius
      Layout: Left text column + right carousel extending to screen edge
      The partial 4th card should appear from outside the viewport
    */
    <section className="bg-[#F4F7F7] overflow-hidden w-full">
      <div className="lg:py-0">
        <div className="relative flex flex-col lg:flex-row lg:items-center h-auto lg:h-[521px]">
          {/* 
            Left side - Text content container
            Figma specs: 488px width, 80px padding, 521px height
            HIGHER Z-INDEX: Cards swipe underneath this section when dragging carousel.
          */}
          <div className="px-6 py-[60px] lg:p-[80px] lg:w-[488px] lg:h-[521px] lg:shrink-0 relative z-20 bg-[#F4F7F7] flex flex-col justify-center">
            {/* 
              Headline container
              Figma specs: 305px width, 180px height, 16px gap
            */}
            <div className="flex flex-col items-start gap-4 lg:w-[305px] lg:max-w-[560px]">
              {/* Products badge */}
              <span className="inline-block px-4 py-1.5 text-xs font-medium text-[#345451] bg-white rounded-full border border-[#E5E7EB]">
                Products
              </span>
              
              {/* Main heading */}
              <h2 className="text-2xl lg:text-[40px] lg:leading-[1.1] font-bold text-[#0C1D1C] uppercase">
                DISCOVER THE<br />
                VALU IN EVERY<br />
                MOMENT
              </h2>
            </div>
          </div>

          {/* 
            Right side - Carousel
            EXTENDS TO RIGHT EDGE: No right padding, cards flow to screen edge.
            Partial card visible at edge creates "swiping from outside" effect.
            SWIPE BY DRAGGING: No loop, cards end after last item.
          */}
          <div className="flex-1 overflow-hidden relative z-10 pl-6 lg:pl-0">
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
