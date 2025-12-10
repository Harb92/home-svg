import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  logo: string;
  description: string;
  /* 
    Front image placeholder
    Upload product card front image here — recommended size: 280px × 400px 
  */
  frontImage?: string;
  /* 
    Back image placeholder  
    Upload product card back image here — recommended size: 280px × 400px 
  */
  backImage?: string;
  /* 
    FLIP TRANSITION IMAGE PLACEHOLDER
    This third image briefly appears during the flip animation (mid-flip).
    Upload a transition/intermediate image here — recommended size: 280px × 400px
    This creates a smooth visual effect during the card flip.
    CMS-editable: Can be adjusted via dashboard.
  */
  flipTransitionImage?: string;
}

const ProductCard = ({
  id,
  logo,
  description,
  frontImage,
  backImage,
  flipTransitionImage,
}: ProductCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

  const handleFlip = () => {
    // Show transition image during flip animation
    setShowTransition(true);
    setIsFlipped(!isFlipped);
    
    // Hide transition image after flip completes (matches animation duration)
    setTimeout(() => {
      setShowTransition(false);
    }, 700);
  };

  return (
    <div 
      className="relative w-[280px] h-[402px] cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={handleFlip}
    >
      {/*
        FLIP TRANSITION IMAGE - Shows briefly during flip animation
        This third image appears at the midpoint of the flip for a smooth transition effect.
        CMS-editable: Upload via dashboard — recommended size: 280px × 400px
      */}
      <div 
        className={`absolute inset-0 rounded-[32px] overflow-hidden transition-opacity duration-200 z-10 ${
          showTransition ? "opacity-100" : "opacity-0"
        }`}
        style={{ 
          transitionDelay: showTransition ? "250ms" : "0ms",
          transitionDuration: showTransition ? "200ms" : "100ms"
        }}
      >
        {flipTransitionImage ? (
          <img 
            src={flipTransitionImage} 
            alt={`Product ${id} transition`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#00C4B3] to-[#FF5100] flex items-center justify-center">
            <span className="text-white/40 text-sm">Transition {id}</span>
          </div>
        )}
      </div>

      <div 
        className="relative w-full h-full transition-transform duration-700"
        style={{ 
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        {/* Front Side */}
        <div 
          className="absolute inset-0 rounded-[32px] overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* 
            FRONT IMAGE PLACEHOLDER
            Upload product card front image here — recommended size: 280px × 400px 
          */}
          {frontImage ? (
            <img 
              src={frontImage} 
              alt={`Product ${id} front`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#0891b2] to-[#0D5A53] flex items-center justify-center">
              <span className="text-white/40 text-sm">Front Image {id}</span>
            </div>
          )}
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-between">
            {/* Logo at top */}
            <div className="text-white font-bold text-xl">
              {logo}
            </div>
            
            {/* Bottom content */}
            <div className="flex items-end justify-between">
              <p className="text-white text-sm leading-relaxed max-w-[180px]">
                {description}
              </p>
              
              {/* Arrow button */}
              <button 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 hover:bg-white/90 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleFlip();
                }}
              >
                <ChevronRight className="w-5 h-5 text-[#0D5A53]" />
              </button>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 rounded-[32px] overflow-hidden"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          {/* 
            BACK IMAGE PLACEHOLDER
            Upload product card back image here — recommended size: 280px × 400px 
          */}
          {backImage ? (
            <img 
              src={backImage} 
              alt={`Product ${id} back`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF5100] to-[#0D5A53] flex items-center justify-center">
              <span className="text-white/40 text-sm">Back Image {id}</span>
            </div>
          )}
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-between">
            {/* Logo at top */}
            <div className="text-white font-bold text-xl">
              {logo}
            </div>
            
            {/* Bottom content */}
            <div className="flex items-end justify-between">
              <p className="text-white text-sm leading-relaxed max-w-[180px]">
                Learn more about {logo}
              </p>
              
              {/* Arrow button */}
              <button 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 hover:bg-white/90 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleFlip();
                }}
              >
                <ChevronRight className="w-5 h-5 text-[#0D5A53]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
