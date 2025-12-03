import React from 'react';
import { Rocket, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="h-6 w-6 text-blue-500" />
              <span className="font-bold text-xl text-white">Kivion<span className="text-blue-500">Projects</span></span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering African businesses with affordable, cutting-edge digital solutions. From improved record keeping to complete automation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400">Financial Tools</a></li>
              <li><a href="#" className="hover:text-blue-400">POS & Stock</a></li>
              <li><a href="#" className="hover:text-blue-400">Booking Systems</a></li>
              <li><a href="#" className="hover:text-blue-400">School Management</a></li>
              <li><a href="#" className="hover:text-blue-400">Custom Development</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400">Website Development</a></li>
              <li><a href="#" className="hover:text-blue-400">System Integration</a></li>
              <li><a href="#" className="hover:text-blue-400">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-blue-400">Hosting & Maintenance</a></li>
              <li><a href="#" className="hover:text-blue-400">Company Profiles</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact-info">
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
                <span>Lusaka, Zambia</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <a href="mailto:info@kivion.com" className="hover:text-white">info@kivion.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                <span>+260 97 000 0000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Kivion Projects Innovations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;