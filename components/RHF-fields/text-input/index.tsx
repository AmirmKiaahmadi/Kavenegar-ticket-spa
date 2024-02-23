import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
interface ITextInputProps {
  name: string;
  register: UseFormRegister<any>;
  errors: FieldErrors | undefined;
  label: string;
}
export default function TextInput({
  name,
  register,
  errors,
  label,
}: ITextInputProps) {
  return (
    <div>
      <label
        className=" flex flex-col text-white dark:text-gray-200 my-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        id={name}
        {...register(name, { required: `${label} is Required ` })}
        type="text"
        className="block w-full px-4 py-2 my-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
      />
      {errors && errors[name] && errors[name]?.message && (
        <p className="text-red-500">{String(errors[name]?.message)}</p>
      )}
    </div>
  );
}
