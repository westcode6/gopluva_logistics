export default function TextArea() {
  return (
    <>
     <textarea placeholder="Enter Product Description" className="w-full p-3 mt-2 bg-white border border-slate-300 rounded-2xl text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" id="" cols="20" rows="4"></textarea>
    </>
  );
}
