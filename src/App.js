import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SplashScreen from "./pages/Onboarding/splashScreen";
import SplashScreen2 from "./pages/Onboarding/splashScreen2";
import SplashScreen3 from "./pages/Onboarding/splashScreen3";
import Profile from "./pages/profile";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/home" element={<Home />} />

        <Route path="/splashScreen2" element={<SplashScreen2 />} />

        <Route path="/splashScreen3" element={<SplashScreen3 />} />
      </Routes>
      {/* <BottomNavbar /> */}
    </React.Fragment>
  );
}

export default App;
