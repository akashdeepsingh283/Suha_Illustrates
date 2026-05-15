import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';


const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-white pt-20 mt-20 flex items-center justify-center"
    >
      <div className="max-w-7xl w-full px-6 lg:px-12 text-center">
        <div className="space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mx-auto">
            <Star className="h-4 w-4" />
            <span>Prize-Winning Artist</span>
          </div>

          {/* Heading */}
          <h1 className="text-7xl md:text-8xl font-bold text-gray-900 leading-tight">
            Bringing Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              {' '}
              Vision
            </span>{' '}
            to Life
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Professional freelance artist specializing in digital illustrations, portraits,
            and custom artwork. With over 1 year of experience, I create stunning pieces
            that capture emotion and tell stories.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <HashLink to="/#portfolio">
              <button className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                <span>View My Portfolio</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </HashLink>

            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-amber-600 hover:text-amber-600 transition-all duration-200">
              Get Commission Quote
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">90+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">20+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">1</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
