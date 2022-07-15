import {IoIosArrowBack, IoIosArrowDown} from "react-icons/io"
import {MdDeliveryDining} from "react-icons/md"
import {FaTruck, FaTruckMoving} from "react-icons/fa"
import { Link } from "react-router-dom";
export default function SendParcel() {
  return (
    <>
      <section className="px-4 py-8 max-w-lg m-auto">
        <div className="flex items-center">
        <Link to={'/home'}>
          <span className="inline-block text-xl mt-2 text-gray-800 p-1 rounded-full bg-gray-100 shadow border ">
            <IoIosArrowBack />
          </span></Link>
            <h2 className="pl-8 mb-0">Pickup Location</h2>
        </div>

        <header className="py-8 px-2 mt-8 flex items-center">
            <div className="flex flex-col items-start">
                <span className="w-3 h-3 rounded-full bg-black border shadow-sm"></span>
                <span className="h-16 ml-1 border border-dotted border-gray-400"></span>
                <span className="w-3 h-3 rounded-full bg-sky-500 border shadow-sm"></span>

            </div>
            <div className="w-full flex flex-col ml-4">
                <div className="px-4 py-3 flex items-center justify-start bg-gray-100 shadow rounded-xl border">
                    <h4 className="text-gray-500 text-sm font-semibold mt-2">From:</h4>

                  <div className="flex items-center justify-between w-full">
                  <input type="text" className="w-full bg-gray-100 border-none  ml-2 pl-2 text-black text-sm placeholder:text-black font-bold" placeholder="16 Greenfield Estate, Okota, Lagos" />

                  <span className="inline-block text-xl"><IoIosArrowDown /></span>
                  </div>
                </div>
                <div className="px-4 py-3 mt-4 flex items-center justify-start bg-gray-100 shadow rounded-xl border">
                    <h4 className="text-gray-500 text-sm font-semibold mt-2">To:</h4>

                  <div className="flex items-center justify-between w-full">
                  <input type="text" className="w-full bg-gray-100 border-none ml-2 pl-2 text-black text-sm placeholder:text-black font-bold" placeholder="27, Chevron Drive, Lekki, Lagos" />

                  <span className="inline-block text-xl"><IoIosArrowDown /></span>
                  </div>
                </div>
            </div>
        </header>


    <section className="px-2 py-6 w-full">
      <div className="bg-gray-100 w-full py-6 border shadow-sm rounded-xl flex flex-col">
      <div className="px-4">
        <h2>Pickup Date</h2>

        <div className="w-full mt-4 flex items-center justify-between">
            <select name="" className="py-2 px-2 mr-2 font-semibold  block  bg-gray-200 rounded-md shadow border" id="">
                <option value="">January</option>
                <option value="">Febuary</option>
                <option value="">March</option>
            </select>

            <select name="" className="py-2 px-2 mr-2 font-semibold  block  bg-gray-200 rounded-md shadow border" id="">
                <option value="">2022</option>
                <option value="">2023</option>
                <option value="">2024</option>
                <option value="">2025</option>

            </select>

            <select name="" className="py-2 px-2 mr-4 font-semibold  block bg-gray-200 rounded-md shadow border" id="">
                <option value="">11:30am</option>
            </select>
        </div>

{/* Date */}
        <div>
            <table className="w-full my-8">
                <thead>
                    <tr className="text-sm font-bold flex items-center justify-between">
                        <td className="">S</td>
                        <td className="">M</td>
                        <td className="">T</td>
                        <td className="">W</td>
                        <td className="">T</td>
                        <td className="">F</td>
                        <td className="">S</td>
                    </tr>
                </thead>

                <tbody className="">
                    <tr className="mt-4 text-sm font-bold flex text-center items-center justify-between">
                        <td className="">8</td>
                        <td className="">9</td>
                        <td className="bg-sky-500 text-white w-8 h-8 flex items-center justify-center  rounded-full">10</td>
                        <td className="">11</td>
                        <td className="">12</td>
                        <td className="">13</td>
                        <td className="">14</td>
                    </tr>
                </tbody>


            </table>


            <div className="px-2 flex items-center justify-between">
                <h3 className="text-sm font-bold pr-6">Selected Date 10th November, 2022</h3>
                <h3 className="text-xs font-bold">Time: 9:30am</h3>
            </div>
        </div>
      </div>
        <div></div>
      </div>
    </section>




       <section className="mt-8 px-2">
        <h2>Select Vehicle Type</h2>
       <div className="flex items-center space-x-2 justify-between mt-10">
       <div className="flex flex-col items-center justify-center bg-gray-100 border shadow-sm rounded-xl px-8 py-2">
            <span className="inline-block text-4xl"><MdDeliveryDining /></span>
            <span className="text-sm font-bold">Bike</span>
            <span className="text-sm font-bold">$23</span>
        </div>
        <div className="flex flex-col items-center justify-center bg-sky-400 border shadow-sm rounded-xl px-8 py-2">
            <span className="inline-block text-4xl"><FaTruck/></span>
            <span className="text-sm font-bold">Mini-Van</span>
            <span className="text-sm font-bold">$63</span>
        </div>

        <div className="flex flex-col items-center justify-center bg-gray-100 border shadow-sm rounded-xl px-8 py-2">
            <span className="inline-block text-4xl"><FaTruckMoving /></span>
            <span className="text-sm font-bold">Truck</span>
            <span className="text-sm font-bold">$120</span>
        </div>
       </div>


       <Link to="/parcelSummary">
       <button className="w-full mt-24 bg-sky-500 text-white font-bold tracking-wide py-3 rounded-xl shadow-sm">Confirm</button>
       </Link>
       </section>
      </section>
    </>
  );
}
