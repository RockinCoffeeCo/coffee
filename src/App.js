import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faEtsy } from '@fortawesome/free-brands-svg-icons';
import plainLogo from './assets/plain-logo.svg';
import logo from './assets/image2vector.svg';
import './App.css';

const App = () => (
    <div class="text-center">
      <div className="Background" />
        <header>
          <nav class="fixed top-0 left-0 z-20 w-full bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
              <a href="#" class="flex items-center">
                <img src={plainLogo} class="mr-3 h-6 sm:h-9" alt="Logo" />
              </a>
              <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li>
                    <a href="#" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                  </li>
                  <li>
                    <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About</a>
                  </li>
                  <li>
                    <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      
        <body class="flex flex-col h-screen justify-center items-center m-auto">
          <img src={logo} class="mx-auto" alt="logo" />
          <p class="text-black text-2xl">
            <b>Rockin' Coffee Co. Website Coming Soon! </b> <br /> <br />
            <form action="https://www.etsy.com/shop/RockinCoffeeCo" target="_blank" rel="noreferrer" >
              <button type="submit" class="text-white bg-gradient-to-br from-orange-500 to-orange-700 hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2">
                <FontAwesomeIcon icon={faEtsy} class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" viewBox="0 0 512 512"></FontAwesomeIcon>
                Visit our Etsy Store
              </button>
            </form>
          </p>
        </body>

        <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">Rockin' Coffee Co</a>. All Rights Reserved.</span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="https://m.facebook.com/profile.php?id=100086917226581" target="_blank" rel="noreferrer" class="mr-4 md:mr-6 md:text-xl">
                <FontAwesomeIcon icon={faFacebookF} inverse border />
              </a>
            </li>
            <li>
              <a href="https://www.etsy.com/shop/RockinCoffeeCo" target="_blank" rel="noreferrer" class="mr-4 md:mr-6 md:text-xl">
                <FontAwesomeIcon icon={faEtsy} inverse border />
              </a>
            </li>
          </ul>
        </footer>
    </div>
);

export default App;