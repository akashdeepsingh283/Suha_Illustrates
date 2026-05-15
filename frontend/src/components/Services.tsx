import React from 'react';
import { Palette, User, Layers, Zap, CheckCircle } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';


const Services: React.FC = () => {
  const services = [
    {
      icon: Palette,
      title: 'Digital Illustrations',
      description: 'Custom digital artwork for books, magazines, and personal projects',
      price: 'From $100',
      features: [
        'High-resolution files',
        'Multiple revisions',
        'Commercial license',
        '48-hour delivery',
      ],
      popular: false,
    },
    {
      icon: User,
      title: 'Portrait Commissions',
      description: 'Personalized portraits that capture personality and emotion',
      price: 'From $50',
      features: [
        'Multiple subjects',
        'Various styles available',
        'Print-ready quality',
        'Digital delivery',
      ],
      popular: true,
    },
    {
      icon: Layers,
      title: 'Character Design',
      description: 'Unique character creation for games, stories, and branding',
      price: 'From $100',
      features: [
        'Concept variations',
        'Turnaround sheets',
        'Style consistency',
        'Full licensing',
      ],
      popular: false,
    },
    {
      icon: Zap,
      title: 'Rush Orders',
      description: 'Express delivery for urgent projects without compromising quality',
      price: '+50% fee',
      features: [
        '24-hour delivery',
        'Priority support',
        'Real-time updates',
        'Quality guarantee',
      ],
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I offer a comprehensive range of artistic services tailored to bring your vision to life. 
            Each project is approached with dedication and attention to detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                service.popular 
                  ? 'border-amber-400 transform scale-105' 
                  : 'border-gray-100 hover:border-amber-200'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-4 rounded-xl inline-block mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-amber-600">{service.price}</div>
              </div>

              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

<HashLink
  to="/#contact"
  className={`block text-center mt-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
    service.popular
      ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700 shadow-lg hover:shadow-xl'
      : 'border-2 border-gray-300 text-gray-700 hover:border-amber-600 hover:text-amber-600'
  }`}
>
  Get Started
</HashLink>

            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">My Creative Process</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'We discuss your vision and requirements' },
              { step: '02', title: 'Concept', desc: 'I create initial sketches and concepts' },
              { step: '03', title: 'Creation', desc: 'Your artwork comes to life with precision' },
              { step: '04', title: 'Delivery', desc: 'Final files delivered in your preferred format' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;