import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEtsy } from '@fortawesome/free-brands-svg-icons';

const Etsy = () => (
  <form
    action="https://www.etsy.com/shop/RockinCoffeeCo"
    target="_blank"
    rel="noreferrer"
    className="text-center"
  >
    <button
      type="submit"
      className="text-white bg-gradient-to-br from-orange-500 to-orange-700 hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2"
    >
      <FontAwesomeIcon
        icon={faEtsy}
        className="w-4 h-4 mr-2 -ml-1"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        viewBox="0 0 512 512"
      ></FontAwesomeIcon>
      Visit our Etsy Store
    </button>
  </form>
);

export default Etsy;