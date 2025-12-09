const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-teal-500 to-cyan-400"
        style={{
          background: "linear-gradient(135deg, #0891b2 0%, #14b8a6 50%, #06b6d4 100%)"
        }}
      >
        {/* Decorative 3D cubes pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-300/40 rounded-xl rotate-12 blur-sm" />
          <div className="absolute top-40 right-40 w-24 h-24 bg-teal-400/30 rounded-xl -rotate-6" />
          <div className="absolute top-60 right-10 w-20 h-20 bg-cyan-200/40 rounded-xl rotate-45" />
          <div className="absolute top-10 left-1/3 w-28 h-28 bg-teal-300/30 rounded-xl -rotate-12" />
          <div className="absolute bottom-40 right-1/4 w-16 h-16 bg-cyan-400/30 rounded-xl rotate-12" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-20 pb-20 lg:pb-32">
        <div className="max-w-2xl">
          {/* Logo */}
          <div className="mb-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight">
              valu<span className="text-primary-foreground">*</span>
            </h2>
          </div>

          {/* Headline */}
          <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            MENA's Leading Financial Technology Powerhouse
          </h1>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
