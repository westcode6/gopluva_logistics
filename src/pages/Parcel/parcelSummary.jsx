import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { FaTruck, FaTruckMoving } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function ParcelSummary() {
  return (
    <>
      <section className="px-4 py-8 max-w-lg m-auto">
        <div className="flex items-center">
          <Link to={'/parcel'}>
          <span className="inline-block text-xl text-gray-800 p-1 rounded-full bg-gray-100 shadow border ">
            <IoIosArrowBack />
          </span></Link>
          <h2 className="pl-8 mb-0">Package Summary</h2>
        </div>

        <section className="my-14 px-6">
          <h3 className="text-lg text-black font-semibold tracking-wide">
            1.{" "}
            <span className="pl-2 text-lg text-black">Product Information</span>
          </h3>

          <div className="w-full py-4 border-b-2 border-gray-300 flex items-center justify-between">
            <div className="flex flex-col">
              <h4 className="text-sm font-semibold text-gray-500">From:</h4>

              <h3 className="text-base text-sky-500 font-bold mt-2">
                Okota, Lagos
              </h3>
            </div>

            <div className="flex flex-col">
              <h4 className="text-sm font-semibold text-gray-500">To:</h4>

              <h3 className="text-base text-sky-500 font-bold mt-2">
                Lekki, Lagos
              </h3>
            </div>
          </div>

          <div className="w-full mt-4 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-gray-500">
                Time & Date:
              </h4>

              <h4 className="text-sm font-semibold text-gray-500">
                9:30am, 10 Nov, 2021
              </h4>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <h4 className="text-sm font-semibold text-gray-500">
                Vehecle Type:
              </h4>

              <h4 className="text-sm font-semibold text-gray-500">
                Mini-Van ($60)
              </h4>
            </div>
          </div>
        </section>

        <section className="my-14 px-6">
          <h3 className="text-lg text-black font-semibold tracking-wide">
            2.{" "}
            <span className="pl-2 text-lg text-black">
              Delivery Information
            </span>
          </h3>

          <div className="w-full py-4 border-b-2 border-gray-300 flex flex-col  justify-between">
            <div className="flex flex-col">
              <h4 className="text-sm font-semibold text-gray-500">
                Pickup Address
              </h4>

              <h3 className="text-base text-sky-500 font-bold">
                16, Greenfield Estate, Okota, Lagos
              </h3>
            </div>

            <div className="flex flex-col mt-4">
              <h4 className="text-sm font-semibold text-gray-500">
                Delivery Address
              </h4>

              <h4 className="text-base text-sky-500 font-bold">
                27, Chevron Drive, Lekki, Lagos
              </h4>
            </div>
          </div>

          <div className="w-full mt-4 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-gray-500">
                Receiver Name:
              </h4>

              <h4 className="text-sm font-semibold text-gray-500">
                Okpala Ikenna
              </h4>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <h4 className="text-sm font-semibold text-gray-500">
                Phone Number:
              </h4>

              <h4 className="text-sm font-semibold text-gray-500">
                09065017306
              </h4>
            </div>
          </div>
        </section>



      <section className="mt-14 px-6">
          <h3 className="text-lg text-black font-semibold tracking-wide">
            3.{" "}
            <span className="pl-2 text-lg text-black">
              Package Information
            </span>
          </h3>

          <div className="w-full py-4flex flex-col  justify-between">
            <div className="flex flex-col">
              <h4 className="text-sm font-semibold text-gray-500">
                What are you sending?
              </h4>

              <h3 className="text-base text-sky-500 font-bold">
               Groceries & Toiletries
              </h3>
            </div>
            </div>
            </section>

        <Link to="/parcelSummary">
          <button className="w-full mt-16 bg-sky-500 text-white font-bold tracking-wide py-3 rounded-xl shadow-sm">
            Process Pickup
          </button>
        </Link>
      </section>




    </>
  );
}
