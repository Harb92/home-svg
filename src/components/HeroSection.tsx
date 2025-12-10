import heroBackground from "@/assets/hero-background.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex flex-col justify-end overflow-hidden">
      {/* 
        Hero Background Image - recommended size: 1920px × 1080px
        MOBILE RESPONSIVE NOTE: Currently showing right 50% of image on mobile.
        This will be adjusted later via CMS dashboard for proper mobile-specific image.
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
          {/* Logo */}
          <div className="mb-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground tracking-tight">
              valu<span className="text-primary-foreground">*</span>
            </h2>
          </div>

          {/* Headline */}
          <h1 className="text-3xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 lg:mb-0">
            MENA's Leading Financial Technology Powerhouse
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