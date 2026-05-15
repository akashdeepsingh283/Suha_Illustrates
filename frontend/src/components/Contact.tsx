import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, MessageSquare } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';
const API = import.meta.env.VITE_API_BASE_URL;

interface ContactProps {
  isLoggedIn: boolean;
}

const Contact: React.FC<ContactProps> = ({ isLoggedIn }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!isLoggedIn) {
    toast.error('⚠️ Please sign in before submitting the form.');
    return;
  }

  const orderData = {
    name: formData.name,
    email: formData.email,
    project: formData.project,
    budget: formData.budget,
    message: formData.message,
  };

  try {
    const res = await axios.post(`${API}/order`, orderData);

    if (res.status === 200) {
      toast.success('✅ Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        project: '',
        budget: '',
        message: '',
      });
    } else {
      toast.error(`Unexpected response: ${res.status}`);
    }
  } catch (error: any) {
    console.error('❌ Error:', error);
    const msg = error.response?.data?.message || 'Something went wrong. Try again.';
    toast.error(msg);
  }
};



  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'snoopyydoodles@gmail.com',
      link: 'mailto:snoopyydoodles@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 93687 76711',
      link: 'tel:+9193687767111',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Agra, India',
      link: 'https://www.google.com/maps/place/Agra,+Uttar+Pradesh',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Create{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Together
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your artistic vision to life? I'd love to hear about your project and
            discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-3 rounded-lg">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    required
                  >
                    <option value="">Select a project type</option>
                    <option value="portrait">Portrait Commission</option>
                    <option value="illustration">Digital Illustration</option>
                    <option value="character">Character Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    required
                  >
                    <option value="">Select budget range</option>
                    <option value="under-500">Under $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2500">$1,000 - $2,000</option>
                    <option value="over-2500">Over $2,000</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full h-[40vh] px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project, style preferences, timeline, and any specific requirements..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={!isLoggedIn}
                
                className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 shadow-lg transition-all duration-200
                  ${
                    isLoggedIn
                      ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }
                `}
              >
                <Send className="h-5 w-5" />
                <span>{isLoggedIn ? 'Send Message' : 'Sign in to send'}</span>
              </button>

              {!isLoggedIn && (
                <p className="text-sm text-center text-red-500 mt-2">
                  You must{' '}
                  <a
                    href="/login"
                    className="underline text-amber-600 hover:text-orange-600 transition-all"
                  >
                    sign in
                  </a>{' '}
                  to submit a message.
                </p>
              )}
            </form>
          </div>

          {/* Right Column: Info */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-3 rounded-lg">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">{info.title}</div>
                      <a
                        href={info.link}
                        className="text-gray-900 font-medium hover:text-amber-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-3 rounded-lg">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Availability</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                  <span className="text-green-800 font-medium">Current Status</span>
                  <span className="text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm">
                    Available
                  </span>
                </div>
                <div className="text-gray-600 space-y-2">
                  <p>
                    <strong>Response Time:</strong> Within 24 hours
                  </p>
                  <p>
                    <strong>Next Available:</strong> This week
                  </p>
                  <p>
                    <strong>Typical Timeline:</strong> 3–7 days
                  </p>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Questions?</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <strong className="text-gray-900">How long does a project take?</strong>
                  <p className="text-gray-600">Most projects are completed within 3–7 days.</p>
                </div>
                <div>
                  <strong className="text-gray-900">Do you offer revisions?</strong>
                  <p className="text-gray-600">Yes, I include up to 3 revisions with every project.</p>
                </div>
                <div>
                  <strong className="text-gray-900">What file formats do you provide?</strong>
                  <p className="text-gray-600">High-res PNG, JPEG, and source files (PSD/AI).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
