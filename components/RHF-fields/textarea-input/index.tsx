import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
interface ITextInputProps {
  name: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  label: string;
}
export default function TextareaInput({
  name,
  register,
  errors,
  label,
}: ITextInputProps) {
  return (
    <div>
      <label className="text-white dark:text-gray-200 my-2" htmlFor={name}>
        {label}
      </label>
      <textarea
        id={name}
        {...register(name, { required: `${label} is Required ` })}
        className="block w-full px-4 py-2 my-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
      ></textarea>
      {errors && errors[name] && errors[name]?.message && (
        <p className="text-red-500">{String(errors[name]?.message)}</p>
      )}
    </div>
  );
}
