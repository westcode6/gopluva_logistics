import { MdClose } from "react-icons/md";
import PropTypes from "prop-types";

export default function ModalDialog({
  title,
  openModal,
  setOpenModal,
  children,
}) {
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <section
      className={`${
        !openModal && "hidden"
      } fixed top-0 bottom-0 right-0 left-0 w-full h-screen overflow-y-scroll bg-transparent`}
      style={{ zIndex: 999 }}
    >
      <div className="p-4 z-50 w-full absolute">
        <div className="bg-white shadow-xl rounded-xl rounded-tr-none max-w-lg mx-auto">
          <aside className="flex items-center justify-between p-4">
            <h1 className="text-xl font-bold text-neutral-700">{title}</h1>
            <MdClose
              onClick={handleCloseModal}
              className="text-red-500 text-2xl font-bold cursor-pointer"
            />
          </aside>

          <main className="p-4">{children}</main>
        </div>
      </div>

      <div
        onClick={handleCloseModal}
        className="bg-black opacity-50 fixed top-0 right-0 bottom-0 w-full h-screen"
      ></div>
    </section>
  );
}

ModalDialog.propTypes = {
  title: PropTypes.string,
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func,
};
