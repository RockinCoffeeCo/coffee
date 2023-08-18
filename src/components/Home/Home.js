import React from 'react';

import Etsy from '../Etsy/Etsy';
import bg from './bg.jpg';


const Home = () => {

  return (
  <div id="home" className="relative w-full h-screen flex items-center overflow-hidden">
    <img id="background" src={bg} className="fixed blur-[.5px] lg:blur-sm z-0 bg-cover scale-x-[3.5] scale-y-105 lg:scale-105 w-full h-full lg:h-auto" alt="" />
    <div className="absolute ">
      <div>
        <h1 className="text-white text-shadow-lg shadow-black text-2xl lg:text-7xl text-left font-notable mb-10 ml-10 mt-96">
          ROASTED BY HAND IN <br />
          HOHENWALD TENNESSEE
        </h1>
        <Etsy />
      </div>
    </div>
  </div>
)};

//<img src={logo} alt="logo" />
//<img src={background} className="left-0 right-0 z-[-1] blur-sm" alt="background" />

export default Home;