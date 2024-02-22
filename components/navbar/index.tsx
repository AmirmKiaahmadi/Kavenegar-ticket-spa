import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white shadow">
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <div className="flex items-center text-2xl">
          Kavenegar Frontend Task
        </div>
        <div className="flex mt-4 sm:mt-0">
          <Link className="px-4" href="/">
            Home
          </Link>
          <Link className="px-4" href="/tickets">
            Tickets
          </Link>
          <Link className="px-4" href="/tickets/create-ticket">
            Create Ticket
          </Link>
        </div>
      </div>
    </header>
  );
}
