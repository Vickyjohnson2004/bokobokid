import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Users,
  Headphones,
  FileText,
  Mail,
  Home,
  BookOpen,
  ShoppingBag,
} from "lucide-react";
import { GiBrain } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import logo from "./../assets/Boki.jpg";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    // The Village  /the-village    FaPeopleGroup
    // "Story Quest"  /story-quest    GiBrain
    { name: "Home", to: "/", icon: Home },

    { name: "Story Quest", to: "/the-village", icon: GiBrain },
    {
      name: "Library",
      to: "/library",
      icon: BookOpen,
      dropdown: [
        { name: "Listen", to: "/library/listen", icon: Headphones },
        { name: "Read", to: "/library/read", icon: FileText },
      ],
    },
    { name: "The Village", to: "/story-quest", icon: FaPeopleGroup },
    {
      name: "About Us",
      to: "/about",
      icon: Users,
      dropdown: [
        { name: "Vision", to: "/about/vision", icon: Home },
        { name: "Mission", to: "/about/mission", icon: Home },
        { name: "Team", to: "/about/team", icon: Users },
      ],
    },
    { name: "Store", to: "/store", icon: ShoppingBag },
    { name: "Blog", to: "/blog", icon: FileText },
    { name: "Contact", to: "/contact", icon: Mail },
  ];

  const textColorClass = isScrolled ? "text-black" : "text-gray-200";

  return (
    <nav
      className={`fixed font-bold text-[17px] top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-warm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-heritage rounded-lg flex items-center justify-center animate-pulse-glow">
              <img
                src={logo}
                alt="Bokobokids Logo"
                className="w-12 h-12 object-contain rounded-lg"
              />
            </div>
            <div>
              <h1
                className={`font-playfair text-2xl font-bold ${
                  isScrolled ? "text-black" : "text-gray-400"
                }`}
              >
                Bokobokids
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div
            className="hidden lg:flex items-center space-x-8"
            ref={dropdownRef}
          >
            {navItems.map((item) => {
              const IconComponent = item.icon;
              if (item.dropdown) {
                const isOpen = openDropdown === item.name;
                return (
                  <div
                    key={item.name}
                    className="relative font-ubuntu font-medium"
                  >
                    <button
                      className={`flex items-center space-x-2 ${textColorClass} hover:text-primary transition-colors duration-300 border-b-2 border-transparent ${
                        isOpen ? "border-primary" : ""
                      }`}
                      aria-haspopup="true"
                      aria-expanded={isOpen ? "true" : "false"}
                      onClick={() => setOpenDropdown(isOpen ? null : item.name)}
                      type="button"
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{item.name}</span>
                      <svg
                        className={`w-3 h-3 ml-1 text-current transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="absolute left-0 mt-2 w-40 bg-background/95 backdrop-blur-lg border border-border rounded-md shadow-lg z-50">
                        {item.dropdown.map((subItem) => {
                          const SubIcon = subItem.icon;
                          return (
                            <Link
                              key={subItem.name}
                              to={subItem.to}
                              className="flex items-center space-x-2 px-4 py-2 text-black hover:bg-primary hover:text-white transition-colors duration-300"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <SubIcon className="w-4 h-4" />
                              <span>{subItem.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`flex items-center space-x-2 ${textColorClass} hover:text-primary transition-colors duration-300 font-ubuntu font-medium group hover:text-gray-400 hover:border-b-2`}
                >
                  <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <Button variant="heritage" className="font-ubuntu">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-background/10 backdrop-blur-sm border border-border hover:bg-accent transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border shadow-deep animate-slide-in-from-right">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                if (item.dropdown) {
                  return (
                    <div key={item.name} className="space-y-1">
                      <div className="flex items-center text-black space-x-3 font-ubuntu font-medium py-2">
                        <IconComponent className="w-5 h-5" />
                        <span>{item.name}</span>
                      </div>
                      <div className="pl-6 space-y-1">
                        {item.dropdown.map((subItem) => {
                          const SubIcon = subItem.icon;
                          return (
                            <Link
                              key={subItem.name}
                              to={subItem.to}
                              className="flex items-center text-black space-x-3 font-ubuntu font-medium py-2 hover:text-primary transition-colors duration-300"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <SubIcon className="w-4 h-4" />
                              <span>{subItem.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={`flex items-center text-black space-x-3 ${textColorClass} hover:text-primary transition-colors duration-300 font-ubuntu font-medium py-2`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-border">
                <Button variant="heritage" className="w-full font-ubuntu">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
