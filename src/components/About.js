import '../styles/Background.css';
import bg from '../assets/layered-waves-haikei.png';

const About = () => {

    return (
      <>
        <img src={bg} className="Background" alt="background" />
        <div class="flex flex-col justify-center items-center m-auto w-11/12 md:max-w-md lg:max-w-lg h-screen md:max-h-screen text-xl text-white" >
          <h1> This is the About page! </h1>
        </div>
      </>
    );
}

export default About;