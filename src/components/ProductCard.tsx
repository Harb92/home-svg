import { ChevronRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  subtitle: string;
  description: string;
  logo: string;
  bgColor: string;
  imageUrl?: string;
  isImageCard?: boolean;
}

const ProductCard = ({
  title,
  subtitle,
  description,
  logo,
  bgColor,
  imageUrl,
  isImageCard = false,
}: ProductCardProps) => {
  if (isImageCard) {
    return (
      <div className="relative w-72 h-[400px] rounded-[2rem] overflow-hidden flex-shrink-0 group cursor-pointer">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ 
            backgroundColor: bgColor,
            backgroundImage: imageUrl ? `url(${imageUrl})` : undefined 
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Blur at top */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm" />
        
        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          {/* Logo */}
          <div className="text-primary-foreground font-bold text-lg">
            {logo}
          </div>
          
          {/* Bottom content */}
          <div>
            <p className="text-primary-foreground/90 text-sm leading-relaxed mb-4">
              {description}
            </p>
          </div>
        </div>
        
        {/* Arrow button */}
        <button className="absolute bottom-6 right-6 w-9 h-9 bg-primary-foreground rounded-full flex items-center justify-center group-hover:bg-primary-foreground/90 transition-colors">
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-72 h-[400px] rounded-[2rem] overflow-hidden flex-shrink-0 group cursor-pointer border border-border"
         style={{ backgroundColor: bgColor }}>
      {/* Content */}
      <div className="p-6 flex flex-col h-full">
        {/* Logo */}
        <div className="text-orange-accent font-bold text-lg mb-4">
          {logo}
        </div>
        
        {/* Title lines */}
        <div className="mb-auto">
          <h3 className="text-2xl font-semibold text-foreground leading-tight">
            {title}
          </h3>
          <h3 className="text-2xl font-semibold text-foreground leading-tight">
            {subtitle}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-2xl font-semibold text-foreground">Easier</span>
            <span className="text-xl">🛍️</span>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Arrow button */}
      <button className="absolute bottom-6 right-6 w-9 h-9 bg-primary-foreground rounded-full flex items-center justify-center border border-border group-hover:bg-secondary transition-colors">
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>
    </div>
  );
};

export default ProductCard;
