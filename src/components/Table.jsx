import PropTypes from "prop-types";

export default function Table({ caption, children }) {
  return (
    <table className="w-full bg-white rounded-md">
      {caption && (
        <caption className="text-left text-xs font-bold tracking-wide text-blue-900 mb-6">
          {caption}
        </caption>
      )}

      <tbody>{children}</tbody>

    </table>
  );
}

export function TR({ children }) {
  return (
    <tr className=" cursor-pointer transform hover:-translate-y-1 hover:shadow-xl hover:bg-white mt-6  px-2 transition">
      {children}
    </tr>
  );
}

export function TD({ children }) {
  return <td className="p-3 text-xs font-semibold border-b text-gray-500 border-gray-100 tracking-wide">{children}</td>;
}

Table.propTypes = {
  caption: PropTypes.string || PropTypes.element,
};
