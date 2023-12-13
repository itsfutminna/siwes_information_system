/* eslint-disable react/prop-types */
export default function Input({
  type,
  placeholder,
  id,
  name,
  onChange,
  value,
}) {
  return (
    <input
      className="p-2 text-slate-950 rounded-lg outline-none ring ring-white focus:ring-Futpurple hover:ring-purple-300"
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
}

// className="px-4 py-1 rounded-md outline-none ring ring-white focus:ring-Futpurple hover:ring-purple-300"
