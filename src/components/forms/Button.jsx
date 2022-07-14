import { Link } from "react-router-dom";

export default function Button({ children, className, to, href, ...rest }) {
  const class_name = `${className}  bg-blue-600 hover:bg-blue-700 text-gray-50 font-bold px-6 inline-flex  items-center transform transition hover:-translate-y-1 tracking-wide capitalize`;

  // router link
  if (to) {
    return (
      <Link to={to}>
        <button {...rest} className={class_name}>
          {children}
        </button>
      </Link>
    );
  }

  //   a link
  if (href) {
    return (
      <a href={href} {...rest} className={class_name}>
        {children}
      </a>
    );
  }

  //   button
  return (
    <button {...rest} className={class_name}>
      {children}
    </button>
  );
}
