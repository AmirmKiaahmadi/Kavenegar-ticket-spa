import Link from "next/link";
import React from "react";

export default function HomeSection() {
  return (
    <div className="text-center lg:text-left lg:w-1/2">
      <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
        Simple Ticketing System
      </h1>
      <p className="text-xl lg:text-2xl mt-6 font-light">
        simple ticketing system that includes three sections:
      </p>
      <small>
        1. Create a ticket: this section has a ticket creation form. The user
        should be able to enter the title and message and click the save button
        to create a ticket(note that the form has validation, and the user can
        not create an empty ticket).
      </small>
      <br />
      <small>
        2. List of the tickets: All tickets should be listed and sorted on this
        page from new to old. And for each ticket, there must be a link to view
        the details.
      </small>
      <br />
      <small>
        3. Details of a ticket: After clicking on a ticket, we will be navigated
        to the ticket details page, including a list of answers and a form to
        send a response to this ticket. Also, this page should have a button to
        close the ticket.
      </small>
      <p className="mt-8 md:mt-12">
        <Link
          href="/tasks"
          type="button"
          className=" py-4 px-12 bg-teal-500 hover:bg-teal-600 rounded text-white"
        >
          Go To Tickets
        </Link>
      </p>
    </div>
  );
}
