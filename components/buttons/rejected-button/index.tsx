import React from "react";
interface IRejectButtonProp {
  name: string;
  mutate: () => void;
}
export default function RejectButton({ name, mutate }: IRejectButtonProp) {
  return (
    <button
      onClick={() => mutate()}
      type="button"
      className="px-6 mx-2  w-full leading-5 text-white transition-colors duration-200 transform py-4  bg-red-600 hover:bg-red-400 rounded"
    >
      {name}
    </button>
  );
}
