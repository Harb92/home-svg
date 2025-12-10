import heroBackground from "@/assets/hero-background.png";
import valuLogoHero from "@/assets/valu-logo-hero.png";

const HeroSection = () => {
  /* 
   * CMS EDITABLE CONTENT:
   * - heroLogoSrc: Logo image displayed in hero section (recommended: 150px × 50px)
   * - heroHeadline: Main headline text below the logo
   * These values should be connected to CMS fields for dynamic content management.
   */
  const heroLogoSrc = valuLogoHero;
  const heroHeadline = "MENA's Leading Financial Technology Powerhouse";

  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex flex-col justify-end overflow-hidden">
      {/* 
        Hero Background Image - recommended size: 1920px × 1080px
        MOBILE RESPONSIVE NOTE: Currently showing right 50% of image on mobile.
        This will be adjusted later via CMS dashboard for proper mobile-specific image.
        NO OVERLAY GRADIENTS - clean background image only.
      */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat bg-[center_right] lg:bg-center"
        style={{
          backgroundImage: `url(${heroBackground})`
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-20 pb-16 lg:pb-32">
        <div className="max-w-2xl">
          {/* 
            Logo Placeholder - CMS EDITABLE
            Recommended image size: 150px × 50px (or similar aspect ratio)
            This logo can be swapped via CMS dashboard.
          */}
          <div className="mb-4">
            <img 
              src={heroLogoSrc} 
              alt="Valu Logo" 
              className="h-8 lg:h-12 w-auto"
            />
          </div>

          {/* 
            Headline Text - CMS EDITABLE
            This text can be updated via CMS dashboard.
            Styling: Bold, large text, white/light color for contrast on dark background.
          */}
          <h1 className="text-3xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 lg:mb-0">
            {heroHeadline}
          </h1>

          {/* Mobile Download Button */}
          <button className="lg:hidden flex items-center justify-center px-6 py-3 bg-[#0D5A53] rounded-full text-base font-semibold text-[#00FFE9] mt-6">
            Download Valu App
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;