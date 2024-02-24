import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}
export const Button: React.FC<ButtonProps> = ({ title, ...props }) => {
  return <button {...props}>{title}</button>;
};
