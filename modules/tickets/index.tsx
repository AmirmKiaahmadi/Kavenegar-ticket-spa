"use client";
import React from "react";
import useGetTickets from "./hooks/useGetTickets";
import { CustomTable } from "@/components/table";
import useSetTableCols from "./hooks/useSetTableCols";

export function Tickets() {
  const { data, isLoading } = useGetTickets();
  const { cols } = useSetTableCols();
  return (
    <>
      {isLoading ? (
        <p>loading...</p>
      ) : data && data.length > 0 ? (
        <div className=" md:mx-20 my-10">
          <div className="w-full mx-auto">
            <div className="flex flex-col">
              <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <div className="inline-block w-full align-middle">
                  <div className="overflow-hidden ">
                    <CustomTable data={data} columns={cols} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 className=" text-center my-5">There is no ticket for showing</h1>
      )}
    </>
  );
}
