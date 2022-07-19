import { IoIosArrowBack} from "react-icons/io";
import {MdMobileScreenShare} from "react-icons/md"
import {GrTag} from "react-icons/gr"
import { BsCreditCard2Back } from "react-icons/bs";
import { TiHomeOutline } from "react-icons/ti";
import {BiTransfer } from "react-icons/bi";
import { Link } from "react-router-dom";
import BottomNavbar from "../components/BottomNavbar";

export default function Wallet() {
  return (
    <>
      <section className="w-full px-4 py-8 max-w-lg m-auto animate__animated animate__faster animate__fadeIn">
        <div className="flex items-center justify-between">
          <Link to={"/home"}>
            <span className="inline-block text-xl text-gray-800 p-1 rounded-full bg-gray-100 shadow border ">
              <IoIosArrowBack />
            </span>
          </Link>

          <Link to={"/notifications"}>
          <span className="p-2 rounded-md base-color-bg text-white inline-block relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>

            <span className="absolute -top-2 -right-1 w-5 h-5 flex items-center justify-center rounded-full bg-black text-white text-xs  animate-bounce">10</span>
          </span>

          </Link>
        </div>

        <header className="mt-16 px-2">
          <div className="flex items-center">
            <div>
              <img
                src="./assets/images/user.png"
                className="object-cover object-center w-14 h-14 rounded-full"
                alt="user"
              />
            </div>

            <div className="ml-6 ">
              <h3 className="text-lg font-semibold mb-0">Nathan Praise</h3>
              <h3 className="text-lg font-semibold ">
                Current Balance:{" "}
                <span className="text-sky-500 text-lg">$5,600</span>
              </h3>
            </div>
          </div>

{/* Top Up Section */}
          <div className="w-full flex flex-col items-center justify-center mt-6">
            <div className="w-full bg-sky-200  rounded-md shadow-sm flex flex-col items-center justify-between py-3 px-4">
              <h3 className="text-md font-bold tracking-wide">Top Up</h3>
              <div className="w-full mt-2  flex items-center justify-between">
                <div className=" flex flex-col items-center ">
                  <div className="">
                    <span className="bg-sky-300   text-black p-2 rounded-full inline-block text-xl">
                      <BsCreditCard2Back />
                    </span>
                  </div>

                  <h4 className="text-xs font-bold mt-1">With Card</h4>
                </div>

                <div className="flex flex-col items-center ">
                  <div className="border-r-2 border-l-2 border-gray-400  px-8">
                    <span className="bg-sky-300 text-black p-2 rounded-full inline-block text-xl">
                      <TiHomeOutline />
                    </span>
                  </div>

                  <h4 className="text-xs font-bold mt-1 px-8">With Bank</h4>
                </div>

                <div className="flex flex-col items-center ">
                  <div className="">
                    <span className="bg-sky-300 text-black p-2 rounded-full inline-block text-xl">
                      <BiTransfer />
                    </span>
                  </div>

                  <h4 className="text-xs font-bold mt-1 ">With Transfer</h4>
                </div>
              </div>
            </div>
          </div>
        </header>


{/* Transaction History Section */}
        <section className="mt-10 px-2">
    <h3 className="text-xl font-semibold">Transaction History</h3>


        <div className="mt-8 border-b border-gray-300 pb-5 flex items-center">
            <span className="inline-block bg-sky-200 text-black text-lg p-3 rounded-full"><GrTag /></span>

            <div className="w-full flex items-center justify-between">
              <div className="ml-4">
              <h4 className="font-semibold mb-0">Delivery Fee</h4>
                <span className="font-semibold">November 10, 2022</span>
              </div>

              <h4 className="text-sm font-bold text-red-600">-20,500</h4>
            </div>
        </div>

        <div className="mt-8 border-b border-gray-300 pb-5 flex items-center">
            <span className="inline-block bg-sky-200 text-black text-lg p-3 rounded-full"><MdMobileScreenShare /></span>

            <div className="w-full flex items-center justify-between">
              <div className="ml-4">
              <h4 className="font-semibold mb-0">Top Up</h4>
                <span className="font-semibold">November 08, 2022</span>
              </div>

              <h4 className="text-sm font-bold text-green-500">+16,500</h4>
            </div>
        </div>

        <div className="mt-8 border-b border-gray-300 pb-5 flex items-center">
            <span className="inline-block bg-sky-200 text-black text-lg p-3 rounded-full"><GrTag /></span>

            <div className="w-full flex items-center justify-between">
              <div className="ml-4">
              <h4 className="font-semibold mb-0">Delivery Fee</h4>
                <span className="font-semibold">November 10, 2022</span>
              </div>

              <h4 className="text-sm font-bold text-red-600">-10,000</h4>
            </div>
        </div>


        <div className="mt-8 pb-5 flex items-center">
            <span className="inline-block bg-sky-200 text-black p-3 rounded-full">
            <i className="fa-solid fa-money-bill-transfer"></i>
            </span>

            <div className="w-full flex items-center justify-between">
              <div className="ml-4">
              <h4 className="font-semibold mb-0">Transfer</h4>
                <span className="font-semibold">November 03, 2022</span>
              </div>

              <h4 className="text-sm font-bold text-red-600">-6,500</h4>
            </div>
        </div>
        </section>
      </section>

      <BottomNavbar />
    </>
  );
}
