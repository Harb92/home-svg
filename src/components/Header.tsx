import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Personal", href: "#" },
    { label: "Business", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Investor Relations", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-10">
      {/* Progressive blur background */}
      <div className="absolute inset-0 h-36 bg-gradient-to-b from-white/80 via-white/40 to-transparent pointer-events-none" />
      
      {/* Navbar Container */}
      <nav className="relative flex items-center justify-between w-full max-w-[1140px] h-16 px-2 bg-white/80 backdrop-blur-[40px] rounded-full shadow-[37px_338px_136px_rgba(143,143,143,0.01),21px_190px_115px_rgba(143,143,143,0.05),9px_84px_85px_rgba(143,143,143,0.09),2px_21px_47px_rgba(143,143,143,0.1)]">
        
        {/* Left - Logo & Nav Items */}
        <div className="flex items-center h-full">
          {/* Logo */}
          <div className="flex items-center px-6">
            <svg width="72" height="16" viewBox="0 0 72 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H5.5L8.5 10L11.5 0H17L11 16H6L0 0Z" fill="#00C4B3"/>
              <path d="M17 0H22.5L25.5 10L28.5 0H34L28 16H23L17 0Z" fill="#00C4B3"/>
              <path d="M34 0H39V16H34V0Z" fill="#00C4B3"/>
              <path d="M44 0H49V10H57V16H44V0Z" fill="#00C4B3"/>
              <path d="M61 0H72V6H67V16H61V0Z" fill="#00C4B3"/>
              <circle cx="69" cy="3" r="3" fill="#FF5100"/>
            </svg>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center h-full">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-center px-3 py-1 text-base font-normal text-[#345451] hover:text-teal-dark transition-colors rounded-full"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right - Buttons */}
        <div className="hidden lg:flex items-center gap-2 pr-2">
          {/* Language Selector */}
          <button className="flex items-center justify-center gap-1 px-6 py-2 h-12 bg-[#F9FBFB] rounded-full text-base font-semibold text-[#0C1D1C]">
            <span>English</span>
            <ChevronDown className="w-5 h-5" />
          </button>
          
          {/* Download App Button */}
          <button className="flex items-center justify-center px-6 py-2 h-12 bg-[#0D5A53] rounded-full text-base font-semibold text-[#00FFE9]">
            Download App
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-teal-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-28 left-4 right-4 bg-white/95 backdrop-blur-lg p-6 rounded-3xl shadow-xl animate-fade-in">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#345451] hover:text-teal-dark transition-colors text-lg font-medium"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <button className="flex items-center justify-center gap-1 px-6 py-3 bg-[#F9FBFB] rounded-full text-base font-semibold text-[#0C1D1C]">
                <span>English</span>
                <ChevronDown className="w-5 h-5" />
              </button>
              <button className="px-6 py-3 bg-[#0D5A53] rounded-full text-base font-semibold text-[#00FFE9]">
                Download App
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
