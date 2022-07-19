import { BiSearch, BiMapPin  } from "react-icons/bi";
import {BsMailbox2, BsWallet2 } from "react-icons/bs";
import { RiDashboardLine } from "react-icons/ri";
import { FaLongArrowAltRight } from "react-icons/fa";
import BottomNavbar from "../components/BottomNavbar";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <section className="w-full max-w-lg m-auto animate__animated animate__faster animate__fadeIn ">
        <header className="bg-sky-500 p-3 rounded-b-3xl shadow-md">
          <div className="flex items-center justify-between">
            <span className="p-2 inline-block text-white bg-sky-400 rounded-md">
              <RiDashboardLine />
            </span>

            <img
              src="./assets/images/user.png"
              className="object-cover object-center w-8 h-8 rounded-md"
            />
          </div>

          <div className="mt-6">
            <h1 className="text-2xl font-bold text-white mb-0">
              Welcome, Mark
            </h1>
            <p className="text-base text-blue-100">Send a package to...</p>

            <div className="relative mt-7 mb-2">
              <input
                type="text"
                className="w-full bg-sky-200 rounded-2xl shadow-2xl border border-sky-200 pl-3 py-3"
                placeholder="Search for a location"
              />

              <span className="absolute bg-white base-color text-2xl p-3 right-0  rounded-2xl top-0">
                <BiSearch />
              </span>
            </div>
          </div>
        </header>

        <main className="px-4 py-8">
          <h2 className="text-xl text-gray-700 font-semibold">
            What do you want to do?
          </h2>

          <div className="bg-gray-100 border mt-4 rounded-md shadow px-3 py-4 flex items-center justify-between">
            <div className="w-full">
              <Link to={"/parcel"}>
             <div className="flex items-center justify-between">
                <div  className="flex">
                <span className="base-color inline-block text-3xl">
                <BsMailbox2 />
              </span>

              <h4 className="text-md pl-6 pt-2 font-semibold">Send Parcel</h4>

                </div>
            <span className="text-xl inline-block">
              <FaLongArrowAltRight />
            </span>
            </div>

            </Link>
             </div>
          </div>



          <div className="bg-gray-100 border mt-4 rounded-md shadow px-3 py-4 flex items-center justify-between">
            <div className="flex items-center justify-between">
              <span className="base-color text-3xl">
                <BiMapPin />
              </span>

              <h4 className="text-md pl-6 pt-2 font-semibold">Track Order</h4>
            </div>

            <span className="text-xl">
              <FaLongArrowAltRight />
            </span>
          </div>



          <div className="bg-gray-100 border mt-4 rounded-md shadow px-3 py-4 flex items-center justify-between">
            <div className="flex items-center justify-between">
              <span className="base-color text-3xl">
                <BsWallet2/>
              </span>

              <h4 className="text-md pl-6 pt-2 font-semibold">Add Wallet</h4>
            </div>

            <span className="text-xl">
              <FaLongArrowAltRight />
            </span>
          </div>



        <div className="border-2 border-dotted border-amber-400 bg-yellow-50 px-3 py-4 mt-6 rounded-md shadow">
            <h2 className="text-base font-semibold mb-2">Verify your email address</h2>
            <p>An email has been sent to globaldevking@gmail.com with a link to verify your email id.</p>

            <button className="rounded-md border p-2 mt-3 border-amber-600 text-amber-700">Resend Email</button>
        </div>

        </main>
      </section>
      <BottomNavbar />
    </>
  );
}
