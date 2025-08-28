import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import logo from "./../assets/Boki.jpg";

export const Footer = () => {
  const quickLinks = [
    "About Us",
    "Our Mission",
    "Cultural Programs",
    "Educational Resources",
    "Community Events",
    "Parent Resources",
  ];

  const programs = [
    "Storytelling Circles",
    "Cultural Workshops",
    "Youth Mentorship",
    "Family Engagement",
    "Educational Content",
    "Book Discussions",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-primary/5 border-t border-border pattern-tribal">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-heritage rounded-lg flex items-center justify-center animate-pulse-glow">
                <img
                  src={logo}
                  alt="Bokobokids Logo"
                  className="w-12 h-12 object-contain rounded-lg"
                />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold text-foreground">
                  Bokobokids
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground font-ubuntu leading-relaxed mb-6">
              Empowering the next generation with African ancient wisdom and
              cultural heritage. Building global citizens rooted in their
              identity and values.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-primary/10 hover:bg-gradient-heritage rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl font-bold text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 font-ubuntu hover:translate-x-2 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-playfair text-xl font-bold text-foreground mb-6">
              Our Programs
            </h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 font-ubuntu hover:translate-x-2 inline-block"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-playfair text-xl font-bold text-foreground mb-6">
              Stay Connected
            </h4>

            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground font-ubuntu">
                  info@bokobokids.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground font-ubuntu">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground font-ubuntu">
                  Global Community
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
              <h5 className="font-ubuntu font-semibold text-foreground mb-3">
                Join Our Newsletter
              </h5>
              <p className="text-sm text-muted-foreground mb-4 font-ubuntu">
                Get updates on cultural events, new resources, and community
                stories.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 font-ubuntu"
                />
                <Button
                  variant="heritage"
                  size="sm"
                  className="w-full font-ubuntu"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-muted-foreground font-ubuntu">
            <span>
              {" "}
              © {new Date().getFullYear()} Bokobokids. All rights reserved.
            </span>
          </div>

          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-ubuntu"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-ubuntu"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-ubuntu"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
