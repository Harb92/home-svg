import { useState } from "react";
import phoneMockup from "@/assets/phone-mockup.png";

const CTASection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-white py-6 lg:py-0 px-6 lg:px-20 lg:h-[555px] lg:flex lg:items-center">
      <div className="max-w-[1140px] mx-auto w-full">
        {/* Mobile: Full-width responsive card */}
        <div className="lg:hidden flex justify-center w-full">
          <div 
            className="flex flex-col items-center px-6 sm:px-10 py-8 sm:py-10 gap-4 w-full rounded-[32px] sm:rounded-[40px]"
            style={{
              background: 'linear-gradient(90deg, #D0DDDC 0%, #99A4A3 100%)',
            }}
          >
            {/* Inner wrapper - left aligned content */}
            <div className="flex flex-col items-start gap-3 w-full">
              <h2 className="text-2xl sm:text-[28px] font-bold text-[#102826] leading-tight">
                Be part of<br />something big
              </h2>
              <p className="text-[#102826]/70 text-sm leading-relaxed">
                Over 3 million people have already chosen Valu. Download the app and experience the difference.
              </p>
              
              {/* Outline button */}
              <button className="mt-2 border-2 border-[#102826] text-[#102826] font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl hover:bg-[#102826] hover:text-white transition-colors text-sm sm:text-base">
                Download Valu App
              </button>
            </div>

            {/* 
              Phone mockup image - MOBILE
              Recommended size: 265px × 280px 
            */}
            <div className="mt-2 flex justify-center w-full">
              <img 
                src={phoneMockup} 
                alt="Valu App Preview" 
                className="w-auto h-[220px] sm:h-[280px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* Desktop: Card with animated image and QR hover */}
        <div 
          className="hidden lg:flex relative rounded-[32px] h-[395px] overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, #D0DDDC 0%, #99A4A3 100%)',
          }}
        >
          {/* Left content */}
          <div className="relative z-10 p-16 flex flex-col justify-center">
            <h2 className="text-[42px] font-bold text-[#102826] mb-4 leading-tight">
              Be Part of Something Big
            </h2>
            <p className="text-[#102826]/80 mb-8 text-lg max-w-xl leading-relaxed">
              Over 3 million people have already chosen Valu.<br />
              Download the app and experience the difference.
            </p>
            
            {/* 
              QR Code Button with hover effect
              On hover: transforms into QR code image
              QR image placeholder — recommended size: 120px × 120px (replaceable)
            */}
            <button 
              className="relative flex items-center gap-4 bg-white rounded-2xl transition-all duration-300 overflow-hidden"
              style={{
                width: isHovered ? '140px' : 'auto',
                height: isHovered ? '140px' : 'auto',
                padding: isHovered ? '10px' : '16px 20px',
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Default state: QR icon + text */}
              <div 
                className={`flex items-center gap-4 transition-opacity duration-300 ${isHovered ? 'opacity-0 absolute' : 'opacity-100'}`}
              >
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
              </div>
              
              {/* Hover state: Large QR code image */}
              {/* 
                QR Code image placeholder — recommended size: 120px × 120px
                Replace this SVG with an uploaded QR code image when available
              */}
              <div 
                className={`flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 absolute'}`}
              >
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="120" height="120" fill="white"/>
                  <rect x="15" y="15" width="30" height="30" fill="#102826"/>
                  <rect x="75" y="15" width="30" height="30" fill="#102826"/>
                  <rect x="15" y="75" width="30" height="30" fill="#102826"/>
                  <rect x="22" y="22" width="16" height="16" fill="white"/>
                  <rect x="82" y="22" width="16" height="16" fill="white"/>
                  <rect x="22" y="82" width="16" height="16" fill="white"/>
                  <rect x="27" y="27" width="6" height="6" fill="#102826"/>
                  <rect x="87" y="27" width="6" height="6" fill="#102826"/>
                  <rect x="27" y="87" width="6" height="6" fill="#102826"/>
                  <rect x="52" y="15" width="8" height="8" fill="#102826"/>
                  <rect x="52" y="52" width="16" height="16" fill="#102826"/>
                  <rect x="75" y="52" width="8" height="8" fill="#102826"/>
                  <rect x="97" y="52" width="8" height="16" fill="#102826"/>
                  <rect x="52" y="75" width="8" height="8" fill="#102826"/>
                  <rect x="75" y="75" width="16" height="8" fill="#102826"/>
                  <rect x="52" y="97" width="16" height="8" fill="#102826"/>
                  <rect x="75" y="90" width="30" height="15" fill="#102826"/>
                </svg>
              </div>
            </button>
          </div>

          {/* 
            Animated image container - DESKTOP
            This container holds the sliding phone mockup image
            Image slides from bottom to top in a continuous loop
            Recommended image size: 300px width × 500px height (replaceable)
          */}
          <div className="absolute right-16 bottom-0 top-0 w-[280px] overflow-hidden flex items-end">
            <div className="animate-slide-up-loop">
              <img 
                src={phoneMockup} 
                alt="Valu App Preview" 
                className="w-[280px] h-auto object-contain"
              />
              <img 
                src={phoneMockup} 
                alt="Valu App Preview" 
                className="w-[280px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
