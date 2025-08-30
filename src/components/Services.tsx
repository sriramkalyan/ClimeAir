
import React from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";


import {
  Wind,
  Thermometer,
  Settings,
  Wrench,
  Zap,
  Droplets,
  Car,
  ChefHat,
  Shield,
  Clock
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);


const Services = () => {
  const leftRef = useRef(null);
 const rightRef = useRef(null);
  const topRef = useRef(null);
   const bottomRef = useRef(null);



  useEffect(() => {
    if (leftRef.current) {
      gsap.fromTo(
        leftRef.current,
        { x: -200, opacity: 0 }, // starting position
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top 80%", // when box enters viewport
            end: "top 50%", // optional: when to end
            scrub: false, // smooth scrubbing
            toggleActions: "play none none reverse", 
          },
        }
      );
    }
    if (rightRef.current) {
      gsap.fromTo(
        rightRef.current,
        { x: 200, opacity: 0 }, // starting position
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 80%", // when box enters viewport
            end: "top 50%", // optional: when to end
            scrub: false, // smooth scrubbing
            toggleActions: "play none none reverse", 
          },
        }
      );
    }
    if (topRef.current) {
      gsap.fromTo(
        topRef.current,
        { y: 200, opacity: 0 }, // starting position
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: topRef.current,
            start: "top 80%", // when box enters viewport
            end: "top 50%", // optional: when to end
            scrub: false, // smooth scrubbing
            toggleActions: "play none none reverse", 
          },
        }
      );
    }
    if (bottomRef.current) {
      gsap.fromTo(
        bottomRef.current,
        { y: -200, opacity: 0 }, // starting position
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: bottomRef.current,
            start: "top 80%", // when box enters viewport
            end: "top 50%", // optional: when to end
            scrub: false, // smooth scrubbing
            toggleActions: "play none none reverse", 
          },
        }
      );
    }
  }, []);
 
  const hvacServices = [
    { icon: Wind, title: 'DX System', description: 'Direct expansion air conditioning systems for efficient cooling' },
    { icon: Settings, title: 'VRV/VRF System', description: 'Variable refrigerant volume/flow systems for flexible control' },
    { icon: Thermometer, title: 'Package Air Conditioners', description: 'Complete packaged units for commercial applications' },
    { icon: Droplets, title: 'Chilled Water System', description: 'Chillers, AHUs, FAHUs, pumps and pressurization systems' },
    { icon: Wind, title: 'Ventilation System', description: 'Fresh air ventilation and exhaust systems' },
    { icon: ChefHat, title: 'Kitchen Extract System', description: 'Specialized kitchen ventilation and exhaust solutions' },
    { icon: Car, title: 'Car Park Ventilation', description: 'Underground and covered parking ventilation systems' },
    { icon: Clock, title: 'Annual Maintenance Contract', description: 'Comprehensive AMC services for all HVAC systems' }
  ];

  const additionalServices = [
    { icon: Zap, title: 'Electrical Installations', description: 'Complete electrical solutions for buildings, hotels, factories & more' },
    { icon: Droplets, title: 'Plumbing Services', description: 'Professional plumbing installations and maintenance services' }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 overflow-hidden" ref={leftRef} >
            Our Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"  />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto overflow-hidden" ref={rightRef}>
            Comprehensive HVAC solutions including design, execution, testing and commissioning 
            of heating, ventilation and air conditioning systems
          </p>
        </div>

        {/* Featured Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16"ref={bottomRef}>
          {[
            {
              img: 'https://images.pexels.com/photos/8293742/pexels-photo-8293742.jpeg',
              title: 'Professional Installation',
              desc: 'Expert HVAC system installation',
            },
            {
              img: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg',
              title: 'Maintenance Services',
              desc: 'Regular maintenance and AMC',
            },
            {
              img: 'https://images.pexels.com/photos/5691658/pexels-photo-5691658.jpeg',
              title: 'System Design',
              desc: 'Custom HVAC system design',
            }
          ].map((service, index) => (
            <div key={index} className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer">
              <div className="relative overflow-hidden"  >
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h4 className="text-xl font-bold mb-2">
                  {service.title}
                </h4>
                <p className="text-blue-100 mb-2">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* HVAC Services */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            HVAC Systems & Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hvacServices.map((service, index) => (
              <div key={index} className="relative overflow-hidden   rounded-xl group cursor-pointer">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 transition-colors duration-300">
                  <div className="mb-6">
                    <service.icon className="w-12 h-12 text-blue-600" />
                  </div>

                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h4>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"ref={leftRef}>
  {hvacServices.map((service, index) => {
    const Icon = service.icon;
    return (
      <div
        key={index}
        className="relative overflow-hidden rounded-xl group cursor-pointer h-full"
      >
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 hover:from-blue-50 hover:to-blue-100 transition-colors duration-300 h-full flex flex-col">
          <div className="mb-6">
            <Icon className="w-12 h-12 text-blue-600" />
          </div>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">
            {service.title}
          </h4>

          <p className="text-gray-600 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    );
  })}
</div>


        {/* Additional Services */}
        <br></br>
        <div ref={rightRef}>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Electrical & Plumbing
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <div key={index} className="relative overflow-hidden group cursor-pointer">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 hover:from-blue-100 hover:to-blue-200 transition-colors duration-300">
                  <div className="mb-6 relative">
                    <service.icon className="w-16 h-16 text-blue-600" />
                  </div>

                  <h4 className="text-xl font-semibold text-gray-800 mb-4">
                    {service.title}
                  </h4>

                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16" >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Need a Custom HVAC Solution?
            </h3>
            <p className="text-blue-100 mb-6">
              Our mission is to deliver the best possible solution that is both technically sound and economically feasible
            </p>
            <a
              href="#contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 inline-block shadow-lg"
            >
              Get Consultation
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;