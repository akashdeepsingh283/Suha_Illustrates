import React from 'react';
import img1 from '../img/IMG_2395.JPG';

const Topposter = () => {
  return (
    <div className="h-0 md:h-[45vh] mt-0 md:mt-10">
      <img
        src={img1}
        alt=""
        className="hidden md:block  object-cover"
      />
    </div>
  );
};

export default Topposter;
