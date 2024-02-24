import React, { Suspense } from "react";
import { TicketPageProps } from "./interface";
import TableSkeleton from "@/components/skeletons/table";
import Ticket from "@/modules/ticket";

export default function Page({ params }: TicketPageProps) {
  return (
    <div>
      <Suspense fallback={<TableSkeleton />}>
        <Ticket params={params} />
      </Suspense>
    </div>
  );
}
