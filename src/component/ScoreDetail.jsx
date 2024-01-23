/* eslint-disable react/prop-types */

export default function ScoreDetail({ label, grade }) {
  return (
    <p className="flex justify-between w-1/3">
      {label} <span>{grade}/10</span>
    </p>
  );
}
