import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, Building } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: [
        'AAYUVARDAN LIFESCIENCE PVT. LTD.',
        'SCO 01, GROUND FLOOR, NEAR SHIVALIK ACADEMY,',
        'RAJA ROAD, SELAQUI, DEHRADUN, ',
        'UTTARAKHAND-248197, INDIA'
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['+91-7380725675']
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
details: ['MaxtonLifescience@gmail.com', 'ajeypandey1515@gmail.com']
    },
    // {
    //   icon: <Clock className="w-6 h-6" />,
    //   title: 'Business Hours',
    //   details: [
    //     'Monday - Saturday: 9:00 AM - 6:00 PM',
    //     'Sunday: Closed'
    //   ]
    // }
  ];

  const departments = [
    { name: 'General Inquiry', email: '' },
    { name: 'Sales & Orders', email: '' },
    { name: 'Technical Support', email: '' },
    { name: 'Quality Assurance', email: '' },
    { name: 'Export Inquiries', email: '' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-accent-600 to-accent-800">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl opacity-90">
              Get in touch with our team for any inquiries about our products and services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-center mb-4 text-accent-500">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{info.title}</h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600 text-sm mb-1">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full Name *"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address *"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                    />
                  </div>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company Name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                    />
                  </div>
                </div>

                <div>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                  >
                    <option value="">Select Subject *</option>
                    <option value="general">General Inquiry</option>
                    <option value="product">Product Information</option>
                    <option value="order">Order & Sales</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="export">Export Inquiry</option>
                  </select>
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message *"
                    rows={5}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 resize-vertical"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent-500 text-white py-3 px-6 rounded-lg hover:bg-accent-600 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information & Map */}
            <div className="space-y-8">
              {/* Department Contacts */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Department Contacts</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-700">{dept.name}</span>
                      <a href={`mailto:${dept.email}`} className="text-accent-500 hover:text-accent-600 transition-colors">
                        {dept.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Find Us</h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                
                     <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.175!2d77.9378!3d30.3165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE4JzU5LjQiTiA3N8KwNTYnMTYuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Company Location"
                  ></iframe>
             
                
                </div>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Directions:</strong> Our facility is located in the Central Hopetown area of Selaqui, 
                    easily accessible from Dehradun city center. We're approximately 15 minutes from Dehradun Railway Station.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">What are your business hours?</h4>
                <p className="text-gray-600 text-sm">We're open Monday to Saturday from 9:00 AM to 6:00 PM. We're closed on Sundays and public holidays.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Do you ship internationally?</h4>
                <p className="text-gray-600 text-sm">Yes, we export our products to various countries. Contact our export team for specific shipping information.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">How can I become a distributor?</h4>
                <p className="text-gray-600 text-sm">Please contact our sales team with your business details and we'll discuss partnership opportunities.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Are your products certified?</h4>
                <p className="text-gray-600 text-sm">Yes, all our products are manufactured in WHO-GMP and ISO certified facilities with proper quality assurance.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Can I visit your facility?</h4>
                <p className="text-gray-600 text-sm">Yes, facility visits can be arranged by appointment. Please contact us in advance to schedule your visit.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">What is your response time?</h4>
                <p className="text-gray-600 text-sm">We typically respond to inquiries within 24 hours during business days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;