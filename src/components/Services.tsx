import React from 'react';
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

const Services = () => {
  const hvacServices = [
    {
      icon: Wind,
      title: 'DX System',
      description: 'Direct expansion air conditioning systems for efficient cooling'
    },
    {
      icon: Settings,
      title: 'VRV/VRF System',
      description: 'Variable refrigerant volume/flow systems for flexible control'
    },
    {
      icon: Thermometer,
      title: 'Package Air Conditioners',
      description: 'Complete packaged units for commercial applications'
    },
    {
      icon: Droplets,
      title: 'Chilled Water System',
      description: 'Chillers, AHUs, FAHUs, pumps and pressurization systems'
    },
    {
      icon: Wind,
      title: 'Ventilation System',
      description: 'Fresh air ventilation and exhaust systems'
    },
    {
      icon: ChefHat,
      title: 'Kitchen Extract System',
      description: 'Specialized kitchen ventilation and exhaust solutions'
    },
    {
      icon: Car,
      title: 'Car Park Ventilation',
      description: 'Underground and covered parking ventilation systems'
    },
    {
      icon: Clock,
      title: 'Annual Maintenance Contract',
      description: 'Comprehensive AMC services for all HVAC systems'
    }
  ];

  const additionalServices = [
    {
      icon: Zap,
      title: 'Electrical Installations',
      description: 'Complete electrical solutions for commercial & residential buildings, hotels, industrial complexes, warehouses and villas'
    },
    {
      icon: Droplets,
      title: 'Plumbing Services',
      description: 'Professional plumbing installations and maintenance services'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive HVAC solutions including design, execution, testing and commissioning 
            of heating, ventilation and air conditioning systems
          </p>
        </div>

        {/* Featured Service Images */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img 
              src="https://images.pexels.com/photos/8293742/pexels-photo-8293742.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="HVAC Installation"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-xl font-bold mb-2">Professional Installation</h4>
              <p className="text-blue-100">Expert HVAC system installation</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img 
              src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="HVAC Maintenance"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-xl font-bold mb-2">Maintenance Services</h4>
              <p className="text-blue-100">Regular maintenance and AMC</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img 
              src="https://images.pexels.com/photos/5691658/pexels-photo-5691658.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="HVAC Design"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-xl font-bold mb-2">System Design</h4>
              <p className="text-blue-100">Custom HVAC system design</p>
            </div>
          </div>
        </div>

        {/* HVAC Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            HVAC Systems & Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hvacServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <service.icon className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-lg font-semibold text-gray-800 mb-3">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Electrical & Plumbing
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-blue-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <service.icon className="w-16 h-16 text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need a Custom HVAC Solution?</h3>
            <p className="text-blue-100 mb-6">
              Our mission is to deliver the best possible solution that is both technically sound and economically feasible
            </p>
            <a 
              href="#contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 inline-block"
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