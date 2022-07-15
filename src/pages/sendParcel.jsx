import {IoIosArrowBack, IoIosArrowDown} from "react-icons/io"
import {MdDeliveryDining} from "react-icons/md"
import {FaTruck, FaTruckMoving} from "react-icons/fa"
export default function SendParcel() {
  return (
    <>
      <section className="px-4 py-8">
        <div className="flex items-center">
            <span className="text-xl text-gray-800 p-1 rounded-full bg-gray-100 shadow border "><IoIosArrowBack /></span>
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
                  <input type="text" className="w-full bg-gray-100 border-none ml-4 pl-3 text-black text-sm placeholder:text-black font-bold" placeholder="16 Greenfield Estate, Okota, Lagos" />

                  <span className="inline-block text-xl"><IoIosArrowDown /></span>
                  </div>
                </div>
                <div className="px-4 py-3 mt-4 flex items-center justify-start bg-gray-100 shadow rounded-xl border">
                    <h4 className="text-gray-500 text-sm font-semibold mt-2">To:</h4>

                  <div className="flex items-center justify-between w-full">
                  <input type="text" className="w-full bg-gray-100 border-none ml-4 pl-3 text-black text-sm placeholder:text-black font-bold" placeholder="27, Chevron Drive, Lekki, Lagos" />

                  <span className="inline-block text-xl"><IoIosArrowDown /></span>
                  </div>
                </div>
            </div>
        </header>




       <section className="mt-16 px-2">
        <h2>Select Vehicle Type</h2>
       <div className="flex items-center justify-between mt-12">
       <div className="flex flex-col items-center justify-center bg-gray-100 border shadow-sm rounded-xl px-8 py-2">
            <span className="inline-block text-4xl"><MdDeliveryDining /></span>
            <span className="text-sm font-bold">Bike</span>
            <span className="text-sm font-bold">$23</span>
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-100 border shadow-sm rounded-xl px-8 py-2">
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


       <button className="w-full mt-24 bg-sky-500 text-white font-bold tracking-wide py-3 rounded-xl shadow-sm">Confirm</button>
       </section>
      </section>
    </>
  );
}
