/* eslint-disable react/prop-types */
export default function AccordionList({
  title,
  id,
  children,
  currentlyOpen,
  onClick,
}) {
  const isOpen = id === currentlyOpen;

  return (
    <li
      className={`p-3 flex gap-4  bg-slate-50 rounded-lg ${
        isOpen && "border-t-2 border-Futpurple"
      }`}
    >
      <p>{id < 9 ? `0${id + 1}` : id + 1}</p>
      <div className="w-full">
        <div
          className="flex items-center justify-between hover:cursor-pointer"
          onClick={onClick}
        >
          <p className={`${isOpen && "text-Futpurple font-semibold"}`}>
            {title}
          </p>
          <p>{isOpen ? "-" : "+"}</p>
        </div>
        {isOpen ? <div className="py-4">{children}</div> : null}
      </div>
    </li>
  );
}
