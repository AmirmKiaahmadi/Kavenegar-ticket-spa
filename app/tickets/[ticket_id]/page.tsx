import React, { Suspense } from "react";
import { TicketPageProps } from "./interface";
import TableSkeleton from "@/components/skeletons/table";
import Ticket from "@/modules/ticket";
import AddAnswerForm from "@/modules/ticket/add-answer";

export default function Page({ params }: TicketPageProps) {
  return (
    <div>
      <Suspense fallback={<TableSkeleton />}>
        <Ticket params={params} />
      </Suspense>
      <Suspense fallback={<TableSkeleton />}>
        <AddAnswerForm params={params} />
      </Suspense>
    </div>
  );
}
