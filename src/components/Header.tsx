import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Personal", href: "#", hasDropdown: true },
    { label: "Business", href: "#", hasDropdown: true },
    { label: "About Us", href: "#", hasDropdown: true },
    { label: "Investor Relations", href: "#" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 px-6 lg:px-20">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary-foreground tracking-tight">
            valu<span className="text-primary">*</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm font-medium"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground text-sm">
            <Globe className="w-4 h-4" />
            English
            <ChevronDown className="w-4 h-4" />
          </button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
            Download App
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-foreground/95 backdrop-blur-lg p-6 animate-slide-in">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-lg font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full mt-4">
              Download App
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
