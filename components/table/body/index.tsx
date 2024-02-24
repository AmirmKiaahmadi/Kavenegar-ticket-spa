import React from "react";
import { Cell, flexRender } from "@tanstack/react-table";
interface IBodyProps<T extends object> {
  cell: Cell<T, unknown>;
}
export const TableBody = <T extends object>({ cell }: IBodyProps<T>) => {
  return (
    <td
      className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
      key={cell.id}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  );
};
