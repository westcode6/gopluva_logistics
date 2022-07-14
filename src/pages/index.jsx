import React, { useState } from "react";

import SplashScreen from "./Onboarding/splashScreen";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <React.Fragment>
      <div className="max-w-xl mx-auto">
     <SplashScreen />
     </div>
    </React.Fragment>
  );
}
