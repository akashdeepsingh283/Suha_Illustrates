import React from 'react';
import img1 from '../img/IMG_2395.JPG';

const Topposter = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <img
        src={img1}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Topposter;