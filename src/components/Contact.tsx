// import React, { useState, useRef } from 'react';
// import emailjs from 'emailjs-com';
// import { motion } from 'framer-motion';
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Globe,
//   Clock,
//   Send,
//   CheckCircle,
// } from 'lucide-react';

// const Contact = () => {
//   const formRef = useRef<HTMLFormElement>(null);
//   const [formData, setFormData] = useState({
//     user_name: '',
//     user_email: '',
//     phone_number: '',
//     service: '',
//     message: ''
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     emailjs.send(
//       "service_irlrqtu",
//       "template_pox5geb",
//       formData,
//       "PahM2nGBzayHHl4wE"
//     )
//     .then(() => {
//       setIsSubmitted(true);
//       setFormData({
//         user_name: '',
//         user_email: '',
//         phone_number: '',
//         service: '',
//         message: ''
//       });
//       setTimeout(() => setIsSubmitted(false), 3000);
//     })
//     .catch((error) => {
//       console.error("Error sending email:", error);
//       alert("Something went wrong. Please try again later.");
//     });
//   };

//   const contactInfo = [
//     {
//       icon: MapPin,
//       title: 'Registered Office',
//       details:
//         '94, Cauvery Nagar South, 5th Street, Near Vinoth Mahal, R.S. College Post, Thanjavur, Tamilnadu-613 005'
//     },
//     {
//       icon: Phone,
//       title: 'Phone Numbers',
//       details: '04362-457620\n+91 81224 57956\n+91 81224 17596'
//     },
//     {
//       icon: Mail,
//       title: 'Email Address',
//       details: 'info.climeairengineers@gmail.com'
//     },
//     {
//       icon: Globe,
//       title: 'Website',
//       details: 'https://climeairengineers.in'
//     }
//   ];

//   return (
//     <section id="contact" className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
//           <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Get in touch with us for professional HVAC solutions and consultations
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <h3 className="text-2xl font-bold text-gray-800 mb-8">Get In Touch</h3>
//             <div className="space-y-6">
//               {contactInfo.map((info, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <div className="bg-blue-100 p-3 rounded-lg">
//                     <info.icon className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h4>
//                     <p className="text-gray-600 whitespace-pre-line">{info.details}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             <motion.div
//               className="mt-8 p-6 bg-blue-50 rounded-lg"
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="flex items-center space-x-3 mb-4">
//                 <Clock className="w-6 h-6 text-blue-600" />
//                 <h4 className="text-lg font-semibold text-gray-800">Business Hours</h4>
//               </div>
//               <div className="text-gray-600">
//                 <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
//                 <p>Sunday: Emergency Services Only</p>
//                 <p className="mt-2 text-blue-600 font-medium">24/7 Emergency Support Available</p>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <h3 className="text-2xl font-bold text-gray-800 mb-8">Send Us a Message</h3>
//             <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
//               <motion.div className="grid md:grid-cols-2 gap-6" initial="hidden" animate="visible" variants={{
//                 hidden: {},
//                 visible: {
//                   transition: { staggerChildren: 0.1 }
//                 }
//               }}>
//                 {['user_name', 'user_email'].map((field, index) => (
//                   <motion.div
//                     key={field}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-2">
//                       {field === 'user_name' ? 'Full Name *' : 'Email Address *'}
//                     </label>
//                     <input
//                       type={field === 'user_email' ? 'email' : 'text'}
//                       id={field}
//                       name={field}
//                       required
//                       value={formData[field as keyof typeof formData]}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                       placeholder={field === 'user_email' ? 'your.email@example.com' : 'Your full name'}
//                     />
//                   </motion.div>
//                 ))}
//               </motion.div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700 mb-2">
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone_number"
//                     name="phone_number"
//                     value={formData.phone_number}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                     placeholder="+91 XXXXX XXXXX"
//                   />
//                 </motion.div>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
//                     Service Required
//                   </label>
//                   <select
//                     id="service"
//                     name="service"
//                     value={formData.service}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                   >
//                     <option value="">Select a service</option>
//                     <option value="HVAC Design">HVAC Design</option>
//                     <option value="Installation">Installation</option>
//                     <option value="Maintenance">Maintenance</option>
//                     <option value="Repair">Repair</option>
//                     <option value="Consultation">Consultation</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 </motion.div>
//               </div>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                   Message *
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   rows={5}
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                   placeholder="Please describe your requirements..."
//                 ></textarea>
//               </motion.div>

//               <motion.button
//                 type="submit"
//                 disabled={isSubmitted}
//                 whileTap={{ scale: 0.95 }}
//                 whileHover={{ scale: 1.05 }}
//                 className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
//               >
//                 {isSubmitted ? (
//                   <>
//                     <CheckCircle size={20} />
//                     <span>Message Sent!</span>
//                   </>
//                 ) : (
//                   <>
//                     <Send size={20} />
//                     <span>Send Message</span>
//                   </>
//                 )}
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Send,
  CheckCircle,
} from 'lucide-react';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    phone_number: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "service_irlrqtu",
      "template_pox5geb",
      formData,
      "PahM2nGBzayHHl4wE"
    )
    .then(() => {
      setIsSubmitted(true);
      setFormData({
        user_name: '',
        user_email: '',
        phone_number: '',
        service: '',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 3000);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      alert("Something went wrong. Please try again later.");
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Registered Office',
      details:
        '94, Cauvery Nagar South, 5th Street, Near Vinoth Mahal, R.S. College Post, Thanjavur, Tamilnadu-613 005'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: '04362-457620\n+91 81224 57956\n+91 81224 17596'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: 'info.climeairengineers@gmail.com'
    },
    {
      icon: Globe,
      title: 'Website',
      details: 'https://climeairengineers.in'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for professional HVAC solutions and consultations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <info.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h4>
                    <p className="text-gray-600 whitespace-pre-line">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
                <h4 className="text-lg font-semibold text-gray-800">Business Hours</h4>
              </div>
              <div className="text-gray-600">
                <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p>Sunday: Emergency Services Only</p>
                <p className="mt-2 text-blue-600 font-medium">24/7 Emergency Support Available</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Send Us a Message</h3>
            <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {['user_name', 'user_email'].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-2">
                      {field === 'user_name' ? 'Full Name *' : 'Email Address *'}
                    </label>
                    <input
                      type={field === 'user_email' ? 'email' : 'text'}
                      id={field}
                      name={field}
                      required
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder={field === 'user_email' ? 'your.email@example.com' : 'Your full name'}
                    />
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone_number"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="HVAC Design">HVAC Design</option>
                    <option value="Installation">Installation</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Repair">Repair</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Please describe your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
