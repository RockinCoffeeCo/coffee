import React from 'react';
import plainLogo from './plain-logo.svg';
import { Link } from 'react-scroll';
import { stack as Menu } from 'react-burger-menu';

const styles = {
  bmBurgerButton: {
    position: 'relative',
    width: '26px',
    height: '20px',
  },
  bmBurgerBars: {
    background: '#ffffff'
  },
  bmBurgerBarsHover: {
    background: '#ffffff'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#000000'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    fontFamily: "Poller One, cursive",
    color: 'black',
    background: '#ffbc36',
    opacity: '0.9',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#ffbc36'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const Header = () => (
  <>
    <header>
      <nav class="header" className="fixed top-0 left-0 z-20 w-full px-4 lg:px-6 py-6 bg-black outline-double outline-white outline-[6px]">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex lg:hidden w-[26px]"></div>
          <a href="/" className="flex items-center">
            <img src={plainLogo} className="mr-3 h-9 lg:h-6" alt="Logo" />
          </a>
          <div className="flex self-center lg:hidden">
            <Menu
              right
              styles={styles}
            >
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                className="py-2 pr-4 pl-3 text-black text-2xl"
              >
                Home
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                className="py-2 pr-4 pl-3 text-black text-2xl"
              >
                About
              </Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                className="py-2 pr-4 pl-3 text-black text-2xl"
              >
                Contact
              </Link>
            </Menu>

          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-2"
            id="mobile-menu-2"
          >

            <ul className="flex flex-col mt-4 font-notable text-xl lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </>
);

export default Header;

/*
      <nav id="Header" className="fixed grid grid-rows-1 grid-cols-3 top-0 left-0 z-20 w-full px-6 py-2.5 h-20 bg-transparent">
        <img id="logo" src={plainLogo}  className="col-start-1 justify-self-center place-self-center w-full h-full object-fill"/>
        <ul className="col-start-3">
          <li className="place-self-center justify-self-center text-white">
            <Link activeClass="active" to="Home" spy={true} smooth={true}>
              Home
            </Link>
          </li>
        </ul>
      </nav>


          <div class="flex items-center lg:order-2">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
*/
