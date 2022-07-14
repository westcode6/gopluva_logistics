import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

export default function Input({
  className,
  label,
  value,
  type = "text",
  hasFormGroup = true,
  ...rest
}) {
  const [toggle_label, setToggleLabel] = useState(false);
  const input = useRef();

  useEffect(() => {
    if (value) {
      input.current.focus();
    }
  }, [value]);

  return (
    <div className={hasFormGroup ? "mb-6" : ""}>
      <label className="relative">
        <span
          className={`capitalize transition transition-all absolute left-2 tracking-wide ${
            toggle_label ? "-top-5" : "top-0"
          } px-1 bg-white text-slate-600 text-sm`}
        >
          {label}
        </span>

        <input
          ref={input}
          value={value}
          onFocus={() => setToggleLabel(true)}
          onBlur={() => setToggleLabel(input.current.value ? true : false)}
          type={type}
          className={`${className} w-full p-3 bg-white border border-slate-300 rounded-2xl text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500`}
          {...rest}
        />
      </label>
    </div>
  );
}


Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string || PropTypes.number,
  type: PropTypes.string,
  hasFormGroup: PropTypes.bool,
};
