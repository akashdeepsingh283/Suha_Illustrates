import React, { useEffect, useState } from 'react';
import { ExternalLink, Heart, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
const backendURL = import.meta.env.VITE_API_BASE_URL;

import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/4.jpg';
import img4 from '../img/5.jpg';
import img5 from '../img/6.JPG';
import img6 from '../img/31.jpg';
import img7 from '../img/IMG_1851.JPG';
import img8 from '../img/IMG_1948.JPG';
import img9 from '../img/IMG_1959.JPG';
import img10 from '../img/IMG_1969.JPG';
import img11 from '../img/IMG_1981.JPG';
import img12 from '../img/IMG_2004.JPG';
import img13 from '../img/IMG_2011.JPG';
import img14 from '../img/IMG_2015.JPG';
import img15 from '../img/IMG_2016.JPG';
import img16 from '../img/IMG_2020.JPG';
import img17 from '../img/IMG_2022.JPG';
import img18 from '../img/IMG_2030.JPG';
import img19 from '../img/IMG_2043.JPG';
import img20 from '../img/IMG_2047.JPG';
import img21 from '../img/IMG_2049.JPG';
import img22 from '../img/IMG_2050.JPG';
import img23 from '../img/IMG_2051.JPG';
import img25 from '../img/IMG_2178.JPG';
import img26 from '../img/IMG_2291.JPG';
import img27 from '../img/IMG_2315.JPG';
import img28 from '../img/IMG_2335.JPG';
import img29 from '../img/IMG_2339.JPG';
import img30 from '../img/IMG_2395.JPG';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [cloudImages, setCloudImages] = useState<any[]>([]);
  const [modalImageIndex, setModalImageIndex] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'digital', label: 'Digital Art' },
    { id: 'portraits', label: 'Portraits' },
    { id: 'illustrations', label: 'Illustrations' },
    { id: 'commissions', label: 'Commissions' },
  ];
  const portfolioItems = [
    { id: 1, category: 'portraits', image: img1, likes: 87, views: 66 },
    { id: 2, category: 'commissions', image: img2, likes: 42, views: 73 },
    { id: 3, category: 'digital', image: img3, likes: 56, views: 93 },
    { id: 4, category: 'illustrations', image: img4, likes: 70, views: 75 },
    { id: 5, category: 'commissions', image: img5, likes: 39, views: 99 },
    { id: 6, category: 'digital', image: img6, likes: 92, views: 87 },
    { id: 7, category: 'portraits', image: img7, likes: 64, views: 98 },
    { id: 8, category: 'illustrations', image: img8, likes: 51, views: 59 },
    { id: 9, category: 'commissions', image: img9, likes: 76, views: 77 },
    { id: 10, category: 'digital', image: img10, likes: 84, views: 81 },
    { id: 11, category: 'digital', image: img11, likes: 33, views: 94 },
    { id: 12, category: 'illustrations', image: img12, likes: 59, views: 79 },
    { id: 13, category: 'commissions', image: img13, likes: 47, views: 68 },
    { id: 14, category: 'portraits', image: img14, likes: 98, views: 65 },
    { id: 15, category: 'digital', image: img15, likes: 44, views: 77 },
    { id: 16, category: 'illustrations', image: img16, likes: 73, views: 88 },
    { id: 17, category: 'commissions', image: img17, likes: 29, views: 69 },
    { id: 18, category: 'portraits', image: img18, likes: 62, views: 84 },
    { id: 19, category: 'digital', image: img19, likes: 79, views: 91 },
    { id: 20, category: 'illustrations', image: img20, likes: 88, views: 52 },
    { id: 21, category: 'commissions', image: img21, likes: 36, views: 95 },
    { id: 22, category: 'portraits', image: img22, likes: 91, views: 71 },
    { id: 23, category: 'digital', image: img23, likes: 74, views: 86 },
    { id: 25, category: 'commissions', image: img25, likes: 97, views: 99 },
    { id: 26, category: 'portraits', image: img26, likes: 53, views: 80 },
    { id: 27, category: 'digital', image: img27, likes: 45, views: 72 },
    { id: 28, category: 'illustrations', image: img28, likes: 66, views: 60 },
    { id: 29, category: 'commissions', image: img29, likes: 89, views: 93 },
    { id: 30, category: 'portraits', image: img30, likes: 61, views: 58 },
  ];

  useEffect(() => {
    const fetchCloudinaryImages = async () => {
      const url = `${backendURL}/cloudinary-images`;
      try {
        const res = await fetch(url);
        const text = await res.text();
        try {
          const data = JSON.parse(text);
          setCloudImages(data);
        } catch (parseError) {
          console.error("JSON parse error:", text);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    fetchCloudinaryImages();
  }, []);

  const allItems = [...portfolioItems, ...cloudImages.map((item, idx) => ({ ...item, id: 1000 + idx }))];
  const filteredItems = activeFilter === 'all' ? allItems : allItems.filter(item => item.category === activeFilter);
  const itemsToDisplay = showAll ? filteredItems : filteredItems.slice(0, 6);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore a curated selection of my recent work, showcasing various styles and techniques developed over years of passionate artistic practice.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => {
                setActiveFilter(filter.id);
                setShowAll(false);
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itemsToDisplay.map((item, idx) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title || ''}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-white/80 text-sm">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{item.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{item.views}</span>
                      </div>
                    </div>
                    <button
                      className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                      onClick={() => setModalImageIndex(filteredItems.findIndex(i => i.id === item.id))}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length > 6 && (
          <div className="text-center mt-16">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {showAll ? 'Show Less' : 'View Full Gallery'}
            </button>
          </div>
        )}
      </div>

      {modalImageIndex !== null && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <button
            onClick={() => setModalImageIndex(null)}
            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 p-1 rounded-full"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative w-[90%] max-w-4xl max-h-[90vh] flex items-center">
            <button
              onClick={() => setModalImageIndex(prev => (prev! > 0 ? prev! - 1 : prev))}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <img
              src={filteredItems[modalImageIndex].image}
              alt="Preview"
              className="mx-auto max-h-[90vh] rounded-xl shadow-xl"
            />
            <button
              onClick={() => setModalImageIndex(prev => (prev! < filteredItems.length - 1 ? prev! + 1 : prev))}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
