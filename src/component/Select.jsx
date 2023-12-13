/* eslint-disable react/prop-types */
export default function Select({ id, name, onChange, value, children }) {
  return (
    <select
      className="p-2 text-slate-950 rounded-lg outline-none ring ring-white focus:ring-Futpurple hover:ring-purple-300"
      id={id}
      name={name}
      onChange={onChange}
      value={value}
    >
      {children}
    </select>
  );
}
