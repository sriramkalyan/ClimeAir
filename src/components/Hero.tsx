
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Phone, Mail, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/32668420/pexels-photo-32668420.jpeg"
          alt="HVAC System Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Floating Contact Icons */}
      <motion.div
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-4"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {[
          {
            href: 'https://wa.me/918122457956',
            icon: <MessageCircle size={24} />,
            bg: 'bg-green-500',
            hoverBg: 'hover:bg-green-600',
            label: 'Chat on WhatsApp'
          },
          {
            href: 'tel:+918122457956',
            icon: <Phone size={24} />,
            bg: 'bg-blue-500',
            hoverBg: 'hover:bg-blue-600',
            label: 'Call Now'
          },
          {
            href: 'mailto:info.climeairengineers@gmail.com',
            icon: <Mail size={24} />,
            bg: 'bg-red-500',
            hoverBg: 'hover:bg-red-600',
            label: 'Send Email'
          }
        ].map(({ href, icon, bg, hoverBg, label }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-14 h-14 ${bg} text-white rounded-full shadow-lg ${hoverBg} hover:scale-110 transition-all duration-300 group`}
            title={label}
          >
            {icon}
            <div className={`absolute right-16 ${bg} text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap`}>
              {label}
            </div>
          </a>
        ))}
      </motion.div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

    
          <div className= "container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Professional HVAC Solutions
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed drop-shadow-[2px_2px_6px_rgba(0,0,0,0.85)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Design, Execution, Testing & Commissioning of Heating, Ventilation and Air Conditioning Systems
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-8 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {[
              '15+ Years individual directors and engineers experiences',
              'Commercial & Industrial',
              'Complete MEP Solutions'
            ].map((text, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <CheckCircle className="text-green-400" size={20} />
                <span className="text-lg drop-shadow-[2px_2px_6px_rgba(0,0,0,1)]">{text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <a
              href="#contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Get Quote</span>
              <ArrowRight size={20} />
            </a>
            <a
              href="#services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Our Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
