const CTASection = () => {
  return (
    <section className="py-12 lg:py-24 px-6 lg:px-20 bg-[#D4C4B0]">
      <div className="max-w-[1140px] mx-auto">
        {/* Gradient card matching Figma design */}
        <div 
          className="rounded-[24px] lg:rounded-[32px] p-6 lg:p-16 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #B8C4C2 0%, #9EABA8 50%, #A8B5B2 100%)',
          }}
        >
          <div className="relative z-10">
            <h2 className="text-2xl lg:text-[42px] font-bold text-[#102826] mb-3 lg:mb-4 leading-tight">
              Be Part of Something Big
            </h2>
            <p className="text-[#102826]/80 mb-6 lg:mb-8 text-sm lg:text-lg max-w-xl leading-relaxed">
              Over 3 million people have already chosen Valu.<br className="hidden lg:block" />
              Download the app and experience the difference.
            </p>
            
            {/* QR Code Button */}
            <button className="flex items-center gap-3 lg:gap-4 bg-white rounded-xl lg:rounded-2xl px-4 lg:px-5 py-3 lg:py-4 hover:bg-white/90 transition-colors">
              {/* QR Code placeholder */}
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#102826] rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-8 lg:h-8">
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
              <span className="text-[#102826] font-semibold text-sm lg:text-base">
                Download Valu App
              </span>
            </button>
          </div>

          {/* Phone mockup placeholder - Mobile only shows partially */}
          <div className="mt-8 lg:absolute lg:right-16 lg:bottom-0 lg:mt-0">
            <div className="w-40 h-64 lg:w-56 lg:h-96 bg-[#102826]/10 rounded-[24px] lg:rounded-[32px] border-2 border-dashed border-[#102826]/20 flex items-center justify-center mx-auto lg:mx-0">
              <span className="text-xs lg:text-sm text-[#102826]/40 text-center px-4">Phone Mockup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;