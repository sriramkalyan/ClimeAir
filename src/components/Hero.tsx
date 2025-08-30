

import { ArrowRight, CheckCircle, Phone, Mail, MessageCircle, Facebook} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";



const Hero = () => {
  
const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
   useEffect(() => {
    if (leftRef.current) {
      gsap.set(leftRef.current, { x: -200 });
      gsap.to(leftRef.current, { x: 0, duration: 2, ease: "power2.out" });
    }

    if (rightRef.current) {
      gsap.set(rightRef.current, { x: 200 });
      gsap.to(rightRef.current, { x: 0, duration: 2, ease: "power2.out" });
    }

    if (topRef.current) {
      gsap.set(topRef.current, { y: -500 });
      gsap.to(topRef.current, { y: 0, duration: 1.5, ease: "power2.out" });
    }

    if (bottomRef.current) {
      gsap.set(bottomRef.current, { y: 100 });
      gsap.to(bottomRef.current, { y: 0, duration: 1.5, ease: "power2.out" });
    }
  }, []);


  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/32668420/pexels-photo-32668420.jpeg"
          alt="HVAC System Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

{/* Floating Contact Icons - Mobile (bottom bar) */}
<div className="fixed bottom-4 inset-x-0 flex justify-center sm:hidden z-50">
  <div className="flex gap-2 bg-black/40 backdrop-blur-md px-3 py-2 rounded-full">
    {[
      {
        href: "https://wa.me/918122457956",
        icon: <MessageCircle size={18} />,
        bg: "bg-green-500",
        hoverBg: "hover:bg-green-600",
        label: "Chat on WhatsApp",
      },
      
      {
        href: "tel:+918122457956",
        icon: <Phone size={18} />,
        bg: "bg-blue-500",
        hoverBg: "hover:bg-blue-600",
        label: "Call Now",
      },
      {
        href: "mailto:info.climeairengineers@gmail.com",
        icon: <Mail size={18} />,
        bg: "bg-red-500",
        hoverBg: "hover:bg-red-600",
        label: "Send Email",
      },
      {
            href: "https://www.facebook.com/profile.php?id=61579274520234",
            icon: <Facebook size={24} />,
            bg: "bg-blue-500",
            hoverBg: "hover:bg-red-600",
            label: "Send Email",
          }
    ].map(({ href, icon, bg, hoverBg, label }, idx) => (
      <a
        key={idx}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center w-10 h-10 ${bg} text-white rounded-full shadow-lg ${hoverBg} transition-all duration-300`}
        title={label}
      >
        {icon}
      </a>
    ))}
  </div>
</div>

      {/* Desktop / Tablet (vertical right side) */}
      <div className="hidden sm:flex fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex-col space-y-4">
        {[
          {
            href: "https://wa.me/918122457956",
            icon: <MessageCircle size={24} />,
            bg: "bg-green-500",
            hoverBg: "hover:bg-green-600",
            label: "Chat on WhatsApp",
          },
          {
            href: "tel:+918122457956",
            icon: <Phone size={24} />,
            bg: "bg-blue-500",
            hoverBg: "hover:bg-blue-600",
            label: "Call Now",
          },
          {
            href: "mailto:info.climeairengineers@gmail.com",
            icon: <Mail size={24} />,
            bg: "bg-red-500",
            hoverBg: "hover:bg-red-600",
            label: "Send Email",
          },
          {
            href: "https://www.facebook.com/profile.php?id=61579274520234",
            icon: <Facebook size={24} />,
            bg: "bg-blue-500",
            hoverBg: "hover:bg-red-600",
            label: "Send Email",
          }
        ].map(({ href, icon, bg, hoverBg, label }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative flex items-center justify-center w-14 h-14 ${bg} text-white rounded-full shadow-lg ${hoverBg} hover:scale-110 transition-all duration-300 group`}
            title={label}
          >
            {icon}
            {/* Tooltip only on desktop */}
            <div
              className={`absolute right-16 ${bg} text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap`}
            >
              {label}
            </div>
          </a>
        ))}
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-5" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-snug sm:leading-tight">
            <span className="text-white drop-shadow-lg" >
              <div ref={leftRef}>Professional HVAC Solutions</div>
              
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl mb-8 text-blue-100 leading-relaxed drop-shadow-[2px_2px_6px_rgba(0,0,0,0.85)]">
           <div ref={rightRef}>
            Design, Execution, Testing & Commissioning of Heating, Ventilation and Air Conditioning Systems
            </div>
          </p>

          {/* Features list */}
          <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-6 gap-4 sm:gap-0 mb-10" ref={bottomRef}>
            {[
              "15+ Years individual directors and engineers experiences",
              "Commercial & Industrial",
              "Complete MEP Solutions",
            ].map((text, idx) => (
              <div key={idx} className="flex items-center justify-center space-x-2">
                <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                <span className="text-sm sm:text-lg drop-shadow-[2px_2px_6px_rgba(0,0,0,1)] text-center sm:text-left">
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* Call to Action Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 text-sm sm:text-base"
            >
              <span>Get Quote</span>
              <ArrowRight size={18} className="sm:size-20" />
            </a>

            <a
              href="#services"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              <span>Our Services</span>
            </a>
          </div> */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center" >
            
  <a
    href="#contact"
    className="bg-white text-blue-600 px-4 sm:px-5 py-2 sm:py-2.5 rounded-md font-medium hover:bg-blue-50 flex items-center justify-center space-x-2 text-sm sm:text-base"
  >
    
    <span>Get Quote</span>
    
    <ArrowRight size={16} />
  </a>

  <a
    href="#services"
    className="border border-white text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-md font-medium hover:bg-white hover:text-blue-600 text-sm sm:text-base"
  >
    <span>Our Services</span>
  </a>
</div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

