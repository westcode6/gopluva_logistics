import { FaTruck } from "react-icons/fa";
import {AiOutlineCheckCircle} from "react-icons/ai"
import BottomNavbar from "../components/BottomNavbar";
export default function Delivery() {
  return (
    <>
      <section className="w-full px-4 py-8 max-w-lg m-auto animate__animated animate__faster animate__fadeIn">
        <header className="flex items-center justify-between">
          <h1 className="text-xl text-gray-800 font-bold ">All</h1>
          <h1 className="text-xl text-stone-400 font-semibold ">Ongoing</h1>
          <h1 className="text-xl text-stone-400 font-semibold ">Delivered</h1>
        </header>

        <main className="mt-10">
          <div className="border-2 pb-4 border-gray-300 rounded-xl shadow">
            <div className="mt-2 px-2 flex items-center justify-between">
              <div className="px-2 py-2">
                <h2 className="text-base font-bold">#XB12456</h2>
                <span className="text-sm text-gray-500">10 Nov, 2022</span>
                <h3 className="text-base text-sky-500 font-bold">
                  Okota, Lagos
                </h3>
              </div>

              <div className="px-2 py-2">
                <h2 className="text-base font-bold">In Transit</h2>
                <span className="text-sm text-gray-500">14 Nov, 2022</span>
                <h3 className="text-base text-sky-500 font-bold">
                  Okota, Lagos
                </h3>
              </div>
            </div>
            {/* Progress */}
            <div className="border-b-2 border-gray-300 py-4">
              <div className="flex items-center justify-center">
                <span className="w-3 h-3 bg-sky-500 rounded-full"></span>
                <span className="w-20 border border-sky-500 "></span>
                <span className="w-3 h-3 bg-sky-500 rounded-full"></span>
                <span className="w-20  border border-sky-500 "></span>

                <span className="w-6 h-6 flex items-center justify-center text-white text-md bg-sky-500 rounded-full">
                  <FaTruck />
                </span>
                <span className="w-20 border border-gray-300 "></span>
                <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
              </div>

              <p className="text-sm text-black text-center font-semibold mt-2 tracking-wide">
                Currently in recipent's city'
              </p>
            </div>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <span className="w-3 h-3 bg-gray-300 rounded-full"></span>

              <span className="w-3 h-3 bg-gray-300 rounded-full"></span>

              <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
            </div>
          </div>


          <div className="mt-10 border-2 pb-4 border-gray-300 rounded-xl shadow">
            <div className="flex items-center justify-between">
              <div className="px-2 py-2">
                <h2 className="text-base font-bold">#XB12456</h2>
                <span className="text-sm text-gray-500">10 Nov, 2022</span>
                <h3 className="text-base text-sky-500 font-bold">
                  Okota, Lagos
                </h3>
              </div>

              <div className="px-2 py-2">
                <h2 className="text-base text-green-500 font-bold">Delivered</h2>
                <span className="text-sm text-gray-500">12 Nov, 2022</span>
                <h3 className="text-base text-sky-500 font-bold">
                  Okota, Lagos
                </h3>
              </div>
            </div>
            {/* Progress */}
            <div className="border-b-2 border-gray-300 py-4">
              <div className="flex items-center justify-center">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="w-20 border border-green-500 "></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="w-20  border border-green-500 "></span>

                <span className="w-3 h-3  text-white text-md bg-green-500 rounded-full">
                </span>
                <span className="w-16 border border-green-500"></span>
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center"><AiOutlineCheckCircle /></span>
              </div>

              <p className="text-sm text-black text-center font-semibold mt-2 tracking-wide">
                Currently in recipent's city'
              </p>
            </div>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <span className="w-3 h-3 bg-gray-300 rounded-full"></span>

              <span className="w-3 h-3 bg-gray-300 rounded-full"></span>

              <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
            </div>
          </div>
        </main>
      </section>

      <BottomNavbar />
    </>
  );
}
