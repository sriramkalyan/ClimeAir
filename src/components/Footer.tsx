import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/Cae_original.png" 
                alt="Clime Air Engineers Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">CLIME AIR ENGINEERS</h3>
                <p className="text-blue-400 text-sm">HVAC Contracting Company</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional HVAC solutions with over 15 years of individual experience. We specialize in 
              design, execution, testing, and commissioning of heating, ventilation, and air 
              conditioning systems for commercial and industrial applications.
            </p>
            <p className="text-blue-400 font-medium">
              Minimal Effort. Maximum Efficiency
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>04362-457620</p>
                  <p>+91 81224 57956</p>
                  <p>+91 81224 17956</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">info.climeairengineers@gmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Globe className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">climeairengineers.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-start space-x-3 mb-4 md:mb-0">
              <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <p className="text-gray-300 text-sm">
                94, Cauvery Nagar South, 5th Street, Near Vinoth Mahal,<br />
                R.S. College Post, Thanjavur, Tamilnadu-613 005
              </p>
            </div>
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 Clime Air Engineers. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;