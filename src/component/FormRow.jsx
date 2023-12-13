/* eslint-disable react/prop-types */
export default function FormRow({ label, error, children }) {
  return (
    <div>
      <div className="flex flex-col gap-2">
        {label && <label htmlFor={children.props.id}>{label}</label>}
        {children}
      </div>
      <p className="text-sm text-red-300 font-semibold h-5 py-1">
        {error ? error : null}
      </p>
    </div>
  );
}
