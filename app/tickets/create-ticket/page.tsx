import TableSkeleton from "@/components/skeletons/table";
import AddTicketForm from "@/modules/create-ticket";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <>
      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          Create New Ticket
        </h1>
        <Suspense fallback={<TableSkeleton />}>
          <AddTicketForm />
        </Suspense>
      </section>
    </>
  );
}
