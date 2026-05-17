import React from 'react';
import img1 from '../img/bg.png';

const Topposter = () => {
  return (
    <div className="mt-12 w-full h-screen overflow-hidden">
      <img
        src={img1}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Topposter;