/* eslint-disable react/prop-types */

export default function Range({ id, min, max, onChange, value }) {
  return (
    <input
      className="w-1/3"
      type="range"
      id={id}
      min={min}
      max={max}
      onChange={onChange}
      value={value}
    />
  );
}
