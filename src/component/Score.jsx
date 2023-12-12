/* eslint-disable react/prop-types */
export default function Score({ label, score, children }) {
  return (
    <div className="flex gap-4 w-full">
      {label && (
        <label className="w-1/4" htmlFor={children.props.id}>
          {label}
        </label>
      )}
      {children}
      <p>{score}/10</p>
    </div>
  );
}
