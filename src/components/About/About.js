import pic from './aboutpic.jpg';
import bg from './circle-scatter-haikei.svg';

const About = () => {

  return (
    <div id="about" className="relative w-full h-screen flex flex-col items-center justify-items-center bg-black">
      <img id="background" src={bg} className="absolute z-0 top-0 left-0 right-0 bottom-0 w-full h-full" alt="" />
      <div id="content" className="absolute flex flex-col justify-start items-center">
        <h1 className="text-5xl text-white font-notable mt-20 pb-2 mb-10 border-b-[10px] border-double border-white p-4 w-auto"> OUR STORY </h1>
        <div className="flex flex-col lg:flex-row lg:space-x-10 justify-center lg:w-3/5 p-5 bg-transparent lg:bg-[#ffbc36] rounded-md">
          <img src={pic} className="border-[10px] border-double border-white" alt=""/>
          <p className="text-black bg-[#ffbc36] font-poller text-center self-center lg:text-left pt-3 pb-3 lg:p-0 text-base lg:text-2xl">
            Hello!  My name is Randall Zimmermann.
            I'm a lifelong music and coffee lover, which is why I founded Rockin' Coffee in 2022.
            Our custom blends are sure to become your morning classics, just like the classics they're inspired by.
            If you're a fellow coffee lover, I invite you to give our roasts a shot so that you can wake up and rock out.
          </p>

        </div>
      </div>
    </div>
  );
}

export default About;