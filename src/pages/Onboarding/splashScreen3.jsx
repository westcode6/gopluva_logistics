import {IoIosArrowBack} from "react-icons/io"
import { Link } from "react-router-dom";
export default function SplashScreen3() {
  return <>

  <section className="w-full md:max-w-lg m-auto  h-screen md:h-full px-4 py-8 flex flex-col justify-between">
    <header className="flex justify-between items-center">
    <Link to={"/splashScreen2"}>
        <span className="text-xl"><IoIosArrowBack /></span>
        </Link>

        <Link to={"/home"}>
            <span className="text-lg font-semibold">Skip</span>
        </Link>
    </header>

    <div className="flex flex-col justify-center">
        <img src="./assets/images/tracking.png" alt="" />

        <div className="px-4">
            <h2 className="base-color text-2xl font-bold">Easy Tracking</h2>
            <p>Easy and fast tracking of where your packages are in realtime.</p>
        </div>
        <div className="py-8"></div>

    </div>

    <div className="w-full flex flex-col items-center justify-between">
        <Link to={'/home'} className="w-full">
            <button className="w-full base-color-bg py-3 rounded-md shadow-md text-white text-base">Sign up</button>
        </Link>

        <Link to={'/home'} className="w-full mt-4">
            <button className="w-full bg-neutral-400 py-3 rounded-md shadow-md text-white text-base">Login</button>
        </Link>
    </div>
  </section>


  </>;
}
