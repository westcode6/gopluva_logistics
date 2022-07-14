import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import ModalDialog from "./modals/ModalDialog";

export default function FloatingButtonBottom() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <React.Fragment>
      <button
        onClick={() => setOpenModal(true)}
        className="bg-blue-700 p-4 rounded-full text-white shadow-2xl fixed bottom-24 right-4 border active:bg-blue-600 hover:bg-blue-600"
      >
        <HiPlus className="text-xl" />
      </button>

      <ModalDialog
        openModal={openModal}
        setOpenModal={setOpenModal}
        title="Quick Actions"
      >
        {/* content goes here */}
      </ModalDialog>
    </React.Fragment>
  );
}
