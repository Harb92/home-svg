const CTASection = () => {
  return (
    <section className="bg-background lg:bg-[#D4C4B0] py-12 lg:py-24 px-6 lg:px-20">
      <div className="max-w-[1140px] mx-auto">
        {/* Mobile: Simple white background layout */}
        <div className="lg:hidden">
          <h2 className="text-3xl font-bold text-[#102826] mb-3 leading-tight">
            Be part of<br />something big
          </h2>
          <p className="text-[#102826]/70 mb-6 text-sm leading-relaxed">
            Over 3 million people have already chosen Valu. Download the app and experience the difference.
          </p>
          
          {/* Outline button for mobile */}
          <button className="border-2 border-[#102826] text-[#102826] font-semibold px-6 py-3 rounded-xl hover:bg-[#102826] hover:text-white transition-colors">
            Download Valu App
          </button>

          {/* Phone mockup placeholder */}
          <div className="mt-8 flex justify-center">
            <div className="w-64 h-[420px] bg-secondary/50 rounded-[32px] border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
              <span className="text-sm text-muted-foreground">Phone Mockup</span>
            </div>
          </div>
        </div>

        {/* Desktop: Gradient card layout */}
        <div 
          className="hidden lg:block rounded-[32px] p-16 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #B8C4C2 0%, #9EABA8 50%, #A8B5B2 100%)',
          }}
        >
          <div className="relative z-10">
            <h2 className="text-[42px] font-bold text-[#102826] mb-4 leading-tight">
              Be Part of Something Big
            </h2>
            <p className="text-[#102826]/80 mb-8 text-lg max-w-xl leading-relaxed">
              Over 3 million people have already chosen Valu.<br />
              Download the app and experience the difference.
            </p>
            
            {/* QR Code Button */}
            <button className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 hover:bg-white/90 transition-colors">
              {/* QR Code placeholder */}
              <div className="w-12 h-12 bg-[#102826] rounded-lg flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="8" height="8" fill="white"/>
                  <rect x="20" y="4" width="8" height="8" fill="white"/>
                  <rect x="4" y="20" width="8" height="8" fill="white"/>
                  <rect x="6" y="6" width="4" height="4" fill="#102826"/>
                  <rect x="22" y="6" width="4" height="4" fill="#102826"/>
                  <rect x="6" y="22" width="4" height="4" fill="#102826"/>
                  <rect x="14" y="4" width="4" height="4" fill="white"/>
                  <rect x="14" y="14" width="4" height="4" fill="white"/>
                  <rect x="20" y="14" width="4" height="4" fill="white"/>
                  <rect x="26" y="14" width="2" height="4" fill="white"/>
                  <rect x="14" y="20" width="4" height="4" fill="white"/>
                  <rect x="20" y="20" width="4" height="4" fill="white"/>
                  <rect x="26" y="20" width="2" height="4" fill="white"/>
                  <rect x="14" y="26" width="4" height="2" fill="white"/>
                  <rect x="20" y="26" width="8" height="2" fill="white"/>
                </svg>
              </div>
              <span className="text-[#102826] font-semibold text-base">
                Download Valu App
              </span>
            </button>
          </div>

          {/* Phone mockup placeholder - Desktop */}
          <div className="absolute right-16 bottom-0">
            <div className="w-56 h-96 bg-[#102826]/10 rounded-[32px] border-2 border-dashed border-[#102826]/20 flex items-center justify-center">
              <span className="text-sm text-[#102826]/40 text-center px-4">Phone Mockup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
