import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Personal: ["Pay", "Valu Cards", "Invest", "Bill", "Business"],
    Business: ["Employees", "Valu Cards", "Portal System", "Payroll Card", "Loans", "BranchIT"],
    "Investor Relations": ["Join the Movement", "Portal System", "Investors Presentations", "Employee Benefits"],
    Company: ["About Us", "Press & Media"],
    Help: ["Contact Us", "FAQs", "Store Locator"],
  };

  // Mobile shows only these columns
  const mobileLinks = {
    Personal: footerLinks.Personal,
    Business: footerLinks.Business,
    Help: footerLinks.Help,
  };

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-background py-10 lg:py-16 px-6 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Mobile: Logo and tagline at top */}
        <div className="lg:hidden mb-8">
          <span className="text-xl font-bold text-foreground tracking-tight">
            valu<span className="text-primary">*</span>
          </span>
          <p className="text-sm text-muted-foreground mt-2">
            Finance your lifestyle right on your phone.
          </p>
        </div>

        {/* Links Grid - Mobile: 2 columns, Desktop: 5 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 mb-10 lg:mb-12">
          {/* Mobile Links */}
          <div className="lg:hidden contents">
            {Object.entries(mobileLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-foreground mb-3 text-sm">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-foreground transition-colors text-xs"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:contents">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-foreground mb-4 text-sm">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between pt-6 lg:pt-8 border-t border-border gap-4 lg:gap-6">
          {/* Logo - Desktop only */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-xl font-bold text-foreground tracking-tight">
              valu<span className="text-primary">*</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs lg:text-sm text-muted-foreground text-center">
            Copyright © 2024 Valu. All Rights Reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3 lg:gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <social.icon className="w-3 h-3 lg:w-4 lg:h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 mt-4 lg:mt-6 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-foreground transition-colors">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;