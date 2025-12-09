import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Personal: ["Pay", "Valu Cards", "Invest", "Bill", "Business"],
    Business: ["Employees", "Valu Cards", "Portal System", "Payroll Card", "Loans", "BranchIT"],
    "Investor Relations": ["Join the Movement", "Portal System", "Investors Presentations", "Employee Benefits"],
    Company: ["About Us", "Press & Media"],
    Help: ["Contact Us", "FAQs", "Store Locator"],
  };

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-background py-12 lg:py-16 px-6 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
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

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between pt-8 border-t border-border gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground tracking-tight">
              valu<span className="text-primary">*</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            Copyright © 2024 Valu. All Rights Reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-foreground transition-colors">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
