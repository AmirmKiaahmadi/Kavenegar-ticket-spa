import { useMemo } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ITask } from "@/services/tickets/interface";
export default function useSetTableCols() {
  const cols = useMemo<ColumnDef<ITask>[]>(
    () => [
      {
        header: "ID",
        cell: (row) => row.renderValue(),
        accessorKey: "id",
      },
      {
        header: "TITLE",
        cell: (row) => row.renderValue(),
        accessorKey: "title",
      },
      {
        header: "MESSAGE",
        cell: (row) => row.renderValue(),
        accessorKey: "message",
      },
      {
        header: "DATE",
        cell: (row) => row.renderValue(),
        accessorKey: "recieved",
      },
      {
        header: "STATUS",
        cell: (row) => row.renderValue(),
        accessorKey: "status",
      },
    ],
    []
  );
  return { cols };
}
