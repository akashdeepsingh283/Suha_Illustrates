import React from 'react';
import { Palette, Heart, Instagram,  Linkedin, Mail } from 'lucide-react';
import { FaWhatsapp, FaBehance } from 'react-icons/fa';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/snoopyydoodles?igsh=Z2U0ZmVwcngyZ3pj', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/arjun-bhatia-322bb0341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:snoopyydoodles@gmail.com', label: 'Email' },
    { icon: FaWhatsapp, href: 'https://wa.me/1234567890', label: 'WhatsApp' },
    { icon: FaBehance, href: 'https://www.behance.net/arjunbhatia7', label: 'Behance' },
  ];

  const quickLinks = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-3 rounded-xl">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Arjun Bhatia</h3>
                <p className="text-gray-400">Freelance Artist</p>
              </div>
            </div>
            <p className="text-gray-300 max-w-md mb-6 leading-relaxed">
              Creating beautiful, meaningful art that captures emotions and tells stories. 
              Based in Barcelona, working with clients worldwide to bring their visions to life.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 p-3 rounded-lg hover:bg-gradient-to-br hover:from-amber-400 hover:to-orange-500 transition-all duration-200 group"
                >
                  <social.icon className="h-5 w-5 text-gray-300 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Digital Illustrations</li>
              <li>Portrait Commissions</li>
              <li>Character Design</li>
              <li>Concept Art</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>by Arjun Bhatia founder of Snoopyydoodles</span>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-gray-400 text-sm">
              <span>&copy; 2025 Snoopyydoodles. All rights reserved.</span>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;