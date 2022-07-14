import {IoIosArrowBack} from "react-icons/io"
import { Link } from "react-router-dom";
export default function SplashScreen2() {
  return <>

  <section className="w-full md:max-w-lg m-auto  h-screen md:h-full px-4 py-8 flex flex-col justify-between">
    <header className="flex justify-between items-center">
    <Link to={"/"}>
        <span className="text-xl"><IoIosArrowBack /></span>
        </Link>

        <Link to={"/home"}>
            <span className="text-lg font-semibold">Skip</span>
        </Link>
    </header>

    <div className="flex flex-col justify-center">
        <img src="./assets/images/delivery.png" alt="" />

        <div className="px-4">
            <h2 className="base-color text-2xl font-bold">Affordable Delivery</h2>
            <p>Getting packages delivered should'nt be expensive, we make it affordable'</p>
        </div>
        <div className="py-8"></div>
    </div>

    <div className="flex items-center justify-between px-4">
        <div className="space-x-2 flex">
            <span className="block w-3 h-3 rounded-full bg-gray-400"></span>

            <span className="block w-3 h-3 rounded-full base-color-bg"></span>

            <span className="block w-3 h-3 rounded-full bg-gray-400"></span>
        </div>

       <Link to={'/splashScreen3'}>
       <button className="base-color-bg rounded-md px-6 py-2 text-white text-sm font-semibold">Next</button></Link>
    </div>
  </section>


  </>;
}
