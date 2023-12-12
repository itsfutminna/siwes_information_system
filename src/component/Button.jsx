/* eslint-disable react/prop-types */

export default function Button({ type, onClick, children }) {
  let btnStyle =
    "bg-purple-300 rounded-md text-lg font-bold text-white mt-4 p-1 outline-none ring ring-purple-300  focus:ring-Futpurple hover:bg-purple-500";
  const others =
    "bg-Futpurple rounded-md text-lg font-bold text-white my-4 px-6 py-1 outline-none ring ring-pink-300  focus:ring-pink-300 hover:bg-purple-500";
  if (type === "others") btnStyle = others;

  return (
    <button onClick={onClick} className={btnStyle} type="submit">
      {children}
    </button>
  );
}
