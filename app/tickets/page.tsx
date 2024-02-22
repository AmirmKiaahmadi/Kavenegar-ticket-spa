import React, { Suspense } from "react";
import Link from "next/link";
import TableSkeleton from "@/components/skeletons/table";
import { Tickets } from "@/modules/tickets";

export default function Page() {
  return (
    <div>
      <p className="mt-8 md:mt-12  md:mx-20">
        <Link
          href="tickets/create-ticket"
          type="button"
          className=" py-4 px-12 bg-teal-500 hover:bg-teal-600 rounded text-white"
        >
          Create New Ticket
        </Link>
      </p>
      <Suspense fallback={<TableSkeleton />}>
        <Tickets />
      </Suspense>
    </div>
  );
}
