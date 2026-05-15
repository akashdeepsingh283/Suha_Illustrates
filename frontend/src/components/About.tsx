import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';
import arjun from '../img/arjun.JPG'
const About: React.FC = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Featured Artist',
      description: 'Selected for Digital Arts Magazine 2024',
    },
    {
      icon: Users,
      title: 'Client Satisfaction',
      description: '98% positive feedback rate',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Average 48-hour turnaround',
    },
    {
      icon: Heart,
      title: 'Passion Driven',
      description: 'Every project crafted with love',
    },
  ];

  return (
    <section id="about" className="py-200 bg-gradient-to-br from- white-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Snoopyydoodles</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Hi! I'm Arjun Bhatia, a passionate freelance artist of Snoopyydoodles in Uttar Pradesh, India. 
                  My journey into the world of digital art began over 2 years ago when I discovered 
                  the magic of bringing imagination to life through pixels and brushstrokes.
                </p>
                <p>
                  Specializing in digital illustrations, character design, and custom portraits, 
                  I've had the privilege of working with clients from around the cities, creating 
                  everything from book cover art to personal commissions that capture life's 
                  most precious moments.
                </p>
                <p>
                  My artistic philosophy centers around the belief that every piece should tell 
                  a story and evoke emotion. Whether it's a whimsical character design or a 
                  heartfelt portrait, I pour my heart into every creation.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialties</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Digital Illustration', 'Portrait Art', 'Character Design', 'Concept Art'].map((skill) => (
                  <div key={skill} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <span className="font-medium text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Profile Image */}
            {/* Right Content */}
<div className="space-y-8">
  {/* Profile Image */}
  <div className="relative mt-6">
    <div className="aspect-[4/4] rounded-2xl overflow-hidden shadow-2xl">
      <img 
        src={arjun}
        alt="Arjun Bhatia"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <div className="text-center">
        <div className="text-2xl font-bold text-gray-900">1+</div>
        <div className="text-sm text-gray-600">Years Creating</div>
      </div>
    </div>
  </div>
</div>
            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-2 rounded-lg">
                      <achievement.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;