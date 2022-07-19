import { FaUserAstronaut } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import {AiFillSetting} from "react-icons/ai"
import { Link } from "react-router-dom";
import BottomNavbar from "../components/BottomNavbar";
export default function Profile() {
  return (
    <>
      <section className="w-full px-4 py-8 max-w-lg m-auto animate__animated animate__faster animate__fadeIn flex flex-col justify-between h-full">
        <header>
          <div className="flex items-center justify-between">
            <span>
              <img
                src="./assets/images/user.png"
                className="object-cover object-center w-8 h-8 rounded-md"
              />
            </span>

            <span className="p-2 rounded-md base-color-bg text-white inline-block">
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
            </span>
          </div>

          <div className="w-full flex flex-col items-center justify-center mt-6">
            <img
              src="./assets/images/user.png"
              className="object-cover object-center w-32 h-32 rounded-full"
            />

            <h2 className="my-6">Nathan Praise</h2>

            <div className="bg-sky-200  rounded-md shadow-sm flex items-center justify-between py-3 px-10">
              <div className="w-32 text-center">
                <h4 className="text-sm font-semibold">Balance</h4>
                <span className="text-xs font-bold">$ 8500</span>
              </div>

              <div className="w-32 text-center border-l-2 pl-4 border-gray-600">
                <h4 className="text-sm font-semibold">Deliveries</h4>
                <span className="text-xs font-bold">10</span>
              </div>
            </div>
          </div>
        </header>

        <main className="mt-10">
          <div className="border-2 border-sky-200 mt-6 rounded-md px-4 py-2 flex items-center">
            <span className="bg-sky-200 inline-block text-xl text-black w-12 h-10 rounded flex items-center justify-center">
              <FaUserAstronaut />
            </span>

            <div className="flex items-center justify-between w-full ml-8">
              <div>
                <h3 className="text-lg font-semibold mb-0">Your Details</h3>
                <span className="text-xs font-semibold">
                  Name, Phone, Address, Email
                </span>
              </div>

              <span className="inline-block text-xl">
                <IoIosArrowForward />
              </span>
            </div>
          </div>

          <div className="border-2 border-sky-200 mt-6 rounded-md px-4 py-2 flex items-center">
            <span className="bg-sky-200 inline-block text-xl text-black w-12 h-10 rounded flex items-center justify-center">
              <AiFillSetting />
            </span>

            <div className="flex items-center justify-between w-full ml-8">
              <div>
                <h3 className="text-lg font-semibold mb-0">Settings</h3>
                <span className="text-xs font-semibold">
                  Make Changes To Settings
                </span>
              </div>

              <span className="inline-block text-xl">
                <IoIosArrowForward />
              </span>
            </div>
          </div>

          <div className="border-2 border-sky-200 mt-6 rounded-md px-4 py-2 flex items-center">
            <span className="bg-sky-200 inline-block text-xl text-black w-12 h-10 rounded flex items-center justify-center">
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
            </span>

            <div className="flex items-center justify-between w-full ml-8">
              <div>
                <h3 className="text-lg font-semibold mb-0">Notification</h3>
                <span className="text-xs font-semibold">
                  Get Instant Delivery Status
                </span>
              </div>

              <span className="inline-block text-xl">
                <IoIosArrowForward />
              </span>
            </div>
          </div>
        </main>


        <div className="flex items-center justify-center mt-16 mb-8">
            <Link to={"/"}>
                <span className="text-2xl text-sky-400 font-bold">Logout</span>
            </Link>
        </div>
      </section>

      <BottomNavbar />
    </>
  );
}
