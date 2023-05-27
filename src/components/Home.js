import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEtsy } from '@fortawesome/free-brands-svg-icons';

import logo from '../assets/logo.svg';


const Home = () => (
  <>
    <body class="flex flex-col h-screen justify-center items-center m-auto">
      <img src={logo} class="mx-auto max-w-lg max-h-lg" alt="logo" />
      <p class="text-black text-2xl">
        <b>Rockin' Coffee Co. Website Coming Soon! </b> <br /> <br />
        <form
          action="https://www.etsy.com/shop/RockinCoffeeCo"
          target="_blank"
          rel="noreferrer"
        >
          <button
            type="submit"
            class="text-white bg-gradient-to-br from-orange-500 to-orange-700 hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2"
          >
            <FontAwesomeIcon
              icon={faEtsy}
              class="w-4 h-4 mr-2 -ml-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              viewBox="0 0 512 512"
            ></FontAwesomeIcon>
            Visit our Etsy Store
          </button>
        </form>
      </p>
    </body>
  </>
);

export default Home;