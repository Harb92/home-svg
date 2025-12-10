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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6 lg:pt-10">
      {/* Background removed per design requirements */}
      
      {/* Navbar Container */}
      <nav className="relative flex items-center justify-between w-full max-w-[1140px] h-14 lg:h-16 px-2 bg-white/90 backdrop-blur-[40px] rounded-full shadow-sm border border-border/30">
        
        {/* Left - Logo */}
        <div className="flex items-center h-full">
          <div className="flex items-center px-4 lg:px-6">
            <span className="text-xl lg:text-2xl font-bold tracking-tight">
              <span className="text-primary">valu</span>
              <span className="text-accent">*</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center h-full">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-center px-3 py-1 text-base font-normal text-muted-foreground hover:text-foreground transition-colors rounded-full"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right - Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-2 pr-2">
          <button className="flex items-center justify-center gap-1 px-6 py-2 h-12 bg-secondary rounded-full text-base font-semibold text-foreground">
            <span>English</span>
            <ChevronDown className="w-5 h-5" />
          </button>
          
          <button className="flex items-center justify-center px-6 py-2 h-12 bg-[#0D5A53] rounded-full text-base font-semibold text-[#00FFE9]">
            Download App
          </button>
        </div>

        {/* Mobile Menu Button - Pill style */}
        <button
          className="lg:hidden flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-foreground font-medium text-sm mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span>Menu</span>
          {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-24 left-4 right-4 bg-white/95 backdrop-blur-lg p-6 rounded-3xl shadow-xl animate-fade-in">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-lg font-medium"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <button className="flex items-center justify-center gap-1 px-6 py-3 bg-secondary rounded-full text-base font-semibold text-foreground">
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