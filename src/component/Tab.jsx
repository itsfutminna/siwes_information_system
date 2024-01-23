/* eslint-disable react/prop-types */
export default function Tab({ onClick, num, activeTab, children }) {
  return (
    <button
      onClick={() => onClick(num)}
      className={` ${num === activeTab && "bg-white"}  bg-slate-300 px-4`}
    >
      {children}
    </button>
  );
}
