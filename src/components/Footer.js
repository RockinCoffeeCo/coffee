import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faEtsy } from '@fortawesome/free-brands-svg-icons';


const Footer = () => (
  <>
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <a href="/" className="hover:underline">
          Rockin' Coffee Co
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="https://m.facebook.com/profile.php?id=100086917226581"
            target="_blank"
            rel="noreferrer"
            className="mr-4 md:mr-6 md:text-xl"
          >
            <FontAwesomeIcon icon={faFacebookF} inverse border />
          </a>
        </li>
        <li>
          <a
            href="https://www.etsy.com/shop/RockinCoffeeCo"
            target="_blank"
            rel="noreferrer"
            className="mr-4 md:mr-6 md:text-xl"
          >
            <FontAwesomeIcon icon={faEtsy} inverse border />
          </a>
        </li>
      </ul>
    </footer>
  </>
);

export default Footer;