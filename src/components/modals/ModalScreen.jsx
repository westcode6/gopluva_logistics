import { MdWest } from "react-icons/md";
import PropTypes from "prop-types";

export default function ModalScreen({
  title,
  navHasShadow = true,
  openModal,
  setOpenModal,
  children,
}) {
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <section
      className={`bg-white fixed top-0 bottom-0 right-0 left-0 w-full h-screen overflow-y-scroll ${
        !openModal && "hidden"
      }`}
      style={{ zIndex: 999999 }}
    >
      <nav
        className={`${
          navHasShadow && "shadow"
        } flex items-center p-4 font-bold text-neutral-700 fixed top-0 right-0 w-full left-0 bg-white`}
      >
        <MdWest
          onClick={handleCloseModal}
          className="text-2xl mr-5 cursor-pointer"
        />
        <h1 className="text-xl">{title}</h1>
      </nav>

      <main className="p-4 mt-16 bg-white">{children}</main>
    </section>
  );
}

ModalScreen.propTypes = {
  title: PropTypes.string,
  navHasShadow: PropTypes.bool,
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func,
};
