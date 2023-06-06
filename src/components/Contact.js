import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import '../App.css';
import bg from '../assets/layered-waves-haikei.png';
import logo from '../assets/logo.svg';

const Contact = () => {
    return (
      <>
        <img src={bg} className="fixed w-screen h-screen left-0 right-0 z-0 bg-cover" />
        <div className="fixed grid grid-cols-6 grid-rows-6 gap-4 w-screen h-screen" >
          <div className="row-start-2 col-start-2 col-end-6 lg:col-start-3 lg:col-end-5 text-center text-4xl text-white">
            <h1><b> Contact Us! </b></h1>
          </div>
          <div className="row-start-2 col-start-2 col-end-6 lg:col-start-2 lg:col-end-2 justify-self-center place-self-end text-white text-4xl">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <div className="row-start-3 col-start-2 col-end-6 lg:col-start-2 lg:col-end-2 justify-self-center place-self-start text-white text-xl lg:text-2xl">
            <p>931.224.4792</p>
          </div>
          <div className="row-start-3 col-start-2 col-end-6 lg:col-start-5 lg:col-end-5 lg:row-start-2 justify-self-center lg:justify-self-center place-self-center lg:place-self-end text-white text-4xl">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="row-start-3 col-span-6 col-start-1 lg:col-start-4 lg:col-end-7 lg:col-span-3 lg:row-start-3 justify-self-center lg:justify-self-center place-self-end lg:place-self-start text-white text-xl lg:text-2xl">
            <p>info@rockin-coffee.com</p>
          </div>
          <div className="lg:row-start-3 lg:col-start-3 lg:col-end-5 col-span-6 row-start-4 row-end-6 w-6/12 justify-self-center place-self-center lg:max-w-md">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </>
    );
}

export default Contact;