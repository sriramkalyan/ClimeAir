import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, Zap } from 'lucide-react';

const About = () => {
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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
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
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="HVAC Engineers at Work"
              className="rounded-lg shadow-xl w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Organizational Team</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="text-lg font-bold text-blue-600 mb-3">{member.title}</h4>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
