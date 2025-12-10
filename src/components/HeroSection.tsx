import heroBackground from "@/assets/hero-background.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Hero Background Image - recommended size: 1920px × 1080px */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
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

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 lg:h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;