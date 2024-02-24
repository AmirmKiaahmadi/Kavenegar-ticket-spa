import React from "react";
import { TableBody } from "./body";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { TableHeader } from "./header";
import { ReactTableProps } from "./interface";
import { useRouter } from "next/navigation";

export const CustomTable = <T extends object>({
  data,
  columns,
}: ReactTableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  const router = useRouter();
  return (
    <table className="w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
      <thead className="bg-gray-100 dark:bg-gray-700">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHeader key={header.id} header={header} />
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
        {table.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            className="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            onClick={() => router.push(`/tickets/${Number(row.id) + 1}`)}
          >
            {row.getVisibleCells().map((cell) => (
              <TableBody key={cell.id} cell={cell} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
