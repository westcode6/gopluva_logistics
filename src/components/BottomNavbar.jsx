import React from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { MdHomeFilled} from "react-icons/md";
import {BsWallet2, BsMailbox2 } from "react-icons/bs"
import {FaUserAstronaut} from 'react-icons/fa'
export default function BottomNavbar() {
  const location = useLocation();

  return (
    <React.Fragment>
      <div className="mt-20 md:mt-0  relative  w-full">
      <aside className="fixed w-full bottom-0 z-50 bg-white shadow-2xl rounded-t-3xl border">
        <div className="flex items-center justify-around">
          <NavItem
            title="Home"
            to="/home"
            icon={<MdHomeFilled className="text-xl mb-2" />}
            active={location.pathname === "/home"}
          />


          <NavItem
            title="Wallet"
            to="/product/add"
            icon={<BsWallet2 className="text-xl mb-2" />}
            active={location.pathname === "/Wallet"}
          />

          <NavItem
            title="Parcel"
            to="/inventory/"
            icon={<BsMailbox2  className="text-xl mb-2" />}
            active={location.pathname === "/Parcel"}
          />

          <NavItem
            title="Profile"
            to="/profile"
            icon={<FaUserAstronaut className="text-xl mb-2" />}
            active={location.pathname === "/profile"}
          />
        </div>
      </aside>
      </div>
    </React.Fragment>
  );
}

function NavItem({ title, to = "#", icon, active }) {
  return (
    <Link
      to={to}
      className={`${
        active ? "base-color font-bold" : "text-gray-600"
      } p-4 flex flex-col items-center text-sm font-semibold tracking-wide`}
    >
      {icon}
      {title}
    </Link>
  );
}

NavItem.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  icon: PropTypes.element,
  active: PropTypes.bool,
};
