import { Header, flexRender } from "@tanstack/react-table";
import React from "react";
interface IHeaderProps<T extends object> {
  header: Header<T, unknown>;
}
export const TableHeader = <T extends object>({ header }: IHeaderProps<T>) => {
  return (
    <th
      scope="col"
      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
    >
      {header.isPlaceholder
        ? null
        : flexRender(header.column.columnDef.header, header.getContext())}
    </th>
  );
};
