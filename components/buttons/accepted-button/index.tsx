import React from "react";
interface IAcceptButtonProps {
  name: string;
}
export default function AcceptButton({ name }: IAcceptButtonProps) {
  return (
    <button
      type="submit"
      className="px-6  w-full leading-5 text-white transition-colors duration-200 transform py-4  bg-teal-500 hover:bg-teal-600 rounded"
    >
      {name}
    </button>
  );
}
