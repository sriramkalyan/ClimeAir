import React from 'react';
import { MapPin, Building, Home, Guitar as Hospital, Factory } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: Home,
      name: 'Private Luxury Villa',
      location: 'Vedaranyam',
      type: 'Residential'
    },
    {
      icon: Building,
      name: 'NIT Quarters',
      location: 'Trichy',
      type: 'Institutional'
    },
    {
      icon: Hospital,
      name: 'Navaladian Dental and Clinic',
      location: 'Thennur',
      type: 'Healthcare'
    },
    // {
    //   icon: Hospital,
    //   name: 'Navaladian Clinic',
    //   location: 'Oil Mill',
    //   type: 'Healthcare'
    // },
    
    {
      icon: Building,
      name: 'Muthumani Mahal',
      location: 'Kattur',
      type: 'Commercial'
    },
    {
      icon: Building,
      name: 'Ishwarya Mahal',
      location: 'Kattur',
      type: 'Commercial'
    },
    {
      icon: Building,
      name: 'Santhosh Mahal',
      location: 'Kailash Nagar',
      type: 'Commercial'
    },
    {
      icon: Factory,
      name: 'Tool AB Factory',
      location: 'Thuvakudi',
      type: 'Industrial'
    },
    {
      icon: Factory,
      name: 'Laxmi Electrical Works',
      location: 'Thuvakudi',
      type: 'Industrial'
    },
    {
      icon: Factory,
      name: 'Velmurugan Engineering Works',
      location: 'Thuvakudi',
      type: 'Industrial'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Residential': return 'bg-green-100 text-green-800';
      case 'Healthcare': return 'bg-red-100 text-red-800';
      case 'Commercial': return 'bg-blue-100 text-blue-800';
      case 'Industrial': return 'bg-purple-100 text-purple-800';
      case 'Institutional': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Projects & Clients</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We have successfully served diverse clients across various sectors with specialized HVAC solutions
          </p>
        </div>

        {/* Project Categories with Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img 
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Residential Projects"
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-lg font-bold">Residential</h4>
              <p className="text-green-100 text-sm">Luxury villas & homes</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img 
              src="https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Commercial Projects"
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-lg font-bold">Commercial</h4>
              <p className="text-blue-100 text-sm">Offices & retail spaces</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img 
              src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Healthcare Projects"
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-lg font-bold">Healthcare</h4>
              <p className="text-red-100 text-sm">Hospitals & clinics</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img 
              src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Industrial Projects"
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-lg font-bold">Industrial</h4>
              <p className="text-purple-100 text-sm">Factories & warehouses</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                  <project.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.name}</h3>
                  <div className="flex items-center space-x-1 text-gray-600 mb-3">
                    <MapPin size={16} />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(project.type)}`}>
                    {project.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-6">
              Join our satisfied clients and experience professional HVAC solutions tailored to your needs
            </p>
            <a 
              href="#contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 inline-block"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;