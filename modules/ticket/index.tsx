"use client";
import React from "react";
import useGetTask from "./hooks/useGetTask";
import { TicketPageProps } from "@/app/tickets/[ticket_id]/interface";

export default function Ticket({ params }: TicketPageProps) {
  const { data } = useGetTask(params.ticket_id);
  return (
    <div>
      {data && (
        <div className="">
          <div className="container mt-4 mx-auto">
            <div className=" w-full">
              <div className="card m-2  border border-gray-400 rounded-lg shadow-md border-opacity-0">
                <div className="m-3 p-4">
                  <h2 className="text-lg mb-2">
                    {data.title}
                    <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">
                      {data.status}
                    </span>
                  </h2>
                  <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">
                    {data.message}
                  </p>
                  <p className=" text-sm">created : {data.recieved}</p>
                </div>
              </div>
            </div>
          </div>
          {data.answers.length > 0 && (
            <>
              <h1>answers : </h1>
              {data.answers.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}
