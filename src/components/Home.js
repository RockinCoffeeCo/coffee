import React from 'react';

import '../styles/Background.css';
import Etsy from './Etsy';
import bg from '../assets/pexels-jason-villanueva-851555.jpg';
import logo from '../assets/logo.svg';


const Home = () => (
  <>
    <img src={bg} className="Background Blur" alt="background" />
    <div className="flex flex-col justify-center items-center m-auto w-11/12 md:max-w-md lg:max-w-lg h-screen md:max-h-screen">
      <img src={logo} alt="logo" />
      <div className="flex flex-col justify-center align-middle">
        <p className="text-black text-2xl text-center">
          <b>Rockin' Coffee Co. Website Coming Soon! </b> <br /> <br />
        </p>
        <Etsy />
      </div>
    </div>
  </>
);

export default Home;