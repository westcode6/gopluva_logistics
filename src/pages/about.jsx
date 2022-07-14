import React from "react";
import { Link } from "react-router-dom";
import BottomNavbar from "../components/BottomNavbar";

export default function About() {
  return (
    <React.Fragment>
      <div className="h-screen bg-orange-500">
        <Link to="/">Back to home page</Link>
        <p className="text-xl text-white font-bold">About page</p>
      </div>

      <BottomNavbar />
    </React.Fragment>
  );
}
