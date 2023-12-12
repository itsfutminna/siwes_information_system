/* eslint-disable react/prop-types */
export default function Form({ type, onSubmit, children }) {
  if (type === "login")
    return (
      <form onSubmit={onSubmit} className="grid grid-cols-1 gap-3 pt-4 ">
        {children}
      </form>
    );
  else
    return (
      <form
        onSubmit={onSubmit}
        className="grid grid-cols-2 gap-4 w-1/2 mx-auto"
      >
        {children}
      </form>
    );
}
