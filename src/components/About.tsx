import React from 'react';
import { Users, Award, Target, Zap } from 'lucide-react';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const About = () => {
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
  const stats = [
    { icon: Users, label: 'Years Experience', value: '15+' },
    { icon: Award, label: 'Projects Completed', value: '100+' },
    { icon: Target, label: 'Client Satisfaction', value: '100%' },
    { icon: Zap, label: 'Service Areas', value: '24/7' }
  ];

  const team = [
    { title: 'DIRECTORS', description: 'Strategic leadership and vision' },
    { title: 'ENGINEERS', description: 'Technical expertise and design' },
    { title: 'TECHNICIANS', description: 'Installation and maintenance' },
    { title: 'HELPERS', description: 'Support and assistance' },
    { title: 'CONTRACT LABOURS', description: 'Specialized workforce' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16"ref={bottomRef}>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div >
            <div ref={leftRef} >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              HVAC Engineers for Complete Solutions
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We establish ourselves as HVAC Engineers for Design, Execution, Testing, and Commissioning 
                of any type of Heating, Ventilation, and Air Conditioning (HVAC) systems...
              </p>
              <p>
                With over 15 years of combined experience...
              </p>
              <p>
                CLIME AIR ENGINEERS has built a reputation...
              </p>
            </div>
            </div>
          </div>

          <div className="relative">
            <div ref={rightRef}>
            <img 
              src="https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="HVAC Engineers at Work"
              className="rounded-lg shadow-xl w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
          </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16" >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Organizational Team</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6" >
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <h4 className="text-lg font-bold text-blue-600 mb-3">{member.title}</h4>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;