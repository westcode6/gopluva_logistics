
import {IoIosArrowBack} from "react-icons/io"
import { Link } from "react-router-dom"
export default function Notification() {




    return <>
    <section className="w-full px-4 py-8 animate__animated animate__faster animate__slideInDown">
    <div className="flex items-center justify-between">
          <Link to={"/wallet"}>
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

            <span className="absolute -top-2 -right-1 w-5 h-5 flex items-center justify-center rounded-full bg-black text-white text-xs  animate-pulse">10</span>
          </span>

          </Link>
        </div>

        <header className="mt-10 px-2">
            <h1 className="text-2xl text-gray-800 font-bold">Notifications</h1>

            <div className="mt-4 flex item-center">
                <h3 className="text-xl text-gray-800 font-semibold ">Read</h3>
                <h3 className="text-xl text-stone-400 font-semibold pl-8">Unread</h3>
            </div>
        </header>



<main className="w-full mt-8">
<div className="w-full  bg-gray-50 border rounded-xl px-2 py-2 flex items-center justify-between">
    <div className="w-full border-r-2 pl-2 border-gray-300">
        <h4 className="text-sm text-green-500 font-bold tracking-wide">Package delivered</h4>
        <p className="text-xs font-semibold">Your package is now with the recipient</p>
    </div>

    <div className="w-20 text-center px-2 flex flex-col items-center justify-center">
        <h3 className="text-lg font-bold m-0">20</h3>
        <span className="text-xs font-bold">mins ago</span>
    </div>
</div>


<div className="w-full mt-6 bg-gray-50 border rounded-xl px-2 py-2 flex items-center justify-between">
    <div className="w-full border-r-2 pl-2 border-gray-300">
        <h4 className="text-sm text-yellow-500 font-bold tracking-wide">Package in Transit</h4>
        <p className="text-xs font-semibold">Your package is on it's way to it's recipient</p>
    </div>

    <div className="w-20 text-center px-2 flex flex-col items-center justify-center">
        <h3 className="text-lg font-bold m-0">50</h3>
        <span className="text-xs font-bold">mins ago</span>
    </div>
</div>


<div className="w-full mt-6 bg-gray-50 border rounded-xl px-2 py-2 flex items-center justify-between">
    <div className="w-full border-r-2 pl-2 border-gray-300">
        <h4 className="text-sm text-green-500 font-bold tracking-wide">Package delivered</h4>
        <p className="text-xs font-semibold">Your package is now with the recipient</p>
    </div>

    <div className="w-20 text-center px-2 flex flex-col items-center justify-center">
        <h3 className="text-lg font-bold m-0">4</h3>
        <span className="text-xs font-bold">hours ago</span>
    </div>
</div>



<div className="w-full mt-6 bg-gray-50 border rounded-xl px-2 py-2 flex items-center justify-between">
    <div className="w-full border-r-2 pl-2 border-gray-300">
        <h4 className="text-sm text-yellow-500 font-bold tracking-wide">Package in Transit</h4>
        <p className="text-xs font-semibold">Your package is on it's way to it's recipient</p>
    </div>

    <div className="w-20 text-center px-2 flex flex-col items-center justify-center">
        <h3 className="text-lg font-bold m-0">10</h3>
        <span className="text-xs font-bold">hours ago</span>
    </div>
</div>



<div className="w-full mt-6 bg-gray-50 border rounded-xl px-2 py-2 flex items-center justify-between">
    <div className="w-full border-r-2 pl-2 border-gray-300">
        <h4 className="text-sm text-red-500 font-bold tracking-wide">Package not received</h4>
        <p className="text-xs font-semibold">Unfortunately, package delivery failed</p>
    </div>

    <div className="w-20 text-center px-2 flex flex-col items-center justify-center">
        <h3 className="text-lg font-bold m-0">2</h3>
        <span className="text-xs font-bold">days ago</span>
    </div>
</div>


<div className="w-full mt-6 bg-gray-50 border rounded-xl px-2 py-2 flex items-center justify-between">
    <div className="w-full border-r-2 pl-2 border-gray-300">
        <h4 className="text-sm text-green-500 font-bold tracking-wide">Package delivered</h4>
        <p className="text-xs font-semibold">Your package is now with the recipient</p>
    </div>

    <div className="w-20 text-center px-2 flex flex-col items-center justify-center">
        <h3 className="text-lg font-bold m-0">5</h3>
        <span className="text-xs font-bold">days ago</span>
    </div>
</div>



<div className="w-full mt-6 bg-gray-50 border rounded-xl px-2 py-2 flex items-center justify-between">
    <div className="w-full border-r-2 pl-2 border-gray-300">
        <h4 className="text-sm text-green-500 font-bold tracking-wide">Package delivered</h4>
        <p className="text-xs font-semibold">Your package is now with the recipient</p>
    </div>

    <div className="w-20 text-center px-2 flex flex-col items-center justify-center">
        <h3 className="text-lg font-bold m-0">10</h3>
        <span className="text-xs font-bold">days ago</span>
    </div>
</div>
</main>

    </section>


    </>
}
