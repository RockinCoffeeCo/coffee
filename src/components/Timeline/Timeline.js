import pic1987 from './1987.jpg';
import pic1996 from './1996.jpg';
import pic2000 from './2000.jpg';
import pic2014 from './2014.jpg';
import pic2017 from './2017.jpg';
import pic2022 from './2022.jpg';

const Timeline = () => {
    return (
        <div id="about" className="relative w-full h-[300vh] flex flex-col items-center justify-items-center bg-slate-950">
            <div id="content" className="absolute">
                <div className="flex text-5xl text-white justify-center align-top font-notable mt-20 pb-2 mb-10">
                    <h1 className="border-b-[10px] border-double border-white p-2"> OUR STORY </h1>
                </div>

                <div id="timeline" className="grid grid-cols-2 grid-rows-6 w-full h-full border-4 border-red-900 place-items-center">
                    <img src={pic1987} className="h-96 w-96 border-[10px] border-white border-double" />
                    <p className="text-white font-ptmono text-4xl text-left bg-yellow-500 ">
                        <b>1987</b> <br />
                        My brothers, a few friends and I played in a band together in high school.

                    </p>

                    <p className="text-white font-ptmono text-4xl text-right">
                        <b>1996</b> <br />
                        My parents, Linda and Johnnie Lee.
                    </p>
                    <img src={pic1996} className="h-96 w-96 border-[10px] border-white border-double" />

                    <img src={pic2000} className="h-96 w-96 border-[10px] border-white border-double" />
                    <p className="text-white font-ptmono text-4xl text-left">
                        <b>2000</b> <br />
                        My daughter, Samantha, at 1 year old.
                    </p>

                    <p className="text-white font-ptmono text-4xl text-right">
                        <b>2014</b> <br />
                        After being laid off around 2008, I completed an LPN certification and started working at the local nursing home.
                    </p>
                    <img src={pic2014} className="h-96 w-96 border-[10px] border-white border-double" />

                    <img src={pic2017} className="h-96 w-96 border-[10px] border-white border-double" />
                    <p className="text-white font-ptmono text-4xl text-left">
                        <b>2017</b> <br />
                        My daughter, the year she graduated high school.
                    </p>

                    <p className="text-white font-ptmono text-4xl text-right">
                        <b>2022</b> <br />
                        My brothers and me, catching up for the first time in years.
                    </p>
                    <img src={pic2022} className="h-96 w-96 border-[10px] border-white border-double" />
                </div>
            </div>
        </div>
    )
}

export default Timeline;