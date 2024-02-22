"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import useGetTickets from "@/modules/tickets/hooks/useGetTickets";
import useAddTicket from "@/modules/create-ticket/hooks/useAddTicket";
interface TicketFormValues {
  title: string;
  message: string;
}

export default function Page() {
  const { refetch } = useGetTickets();
  const { mutate } = useAddTicket(refetch);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TicketFormValues>();
  const onSubmit = (data: TicketFormValues) => {
    mutate(data);
    router.push("/tickets");
  };
  return (
    <>
      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          Create New Ticket
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" grid-cols-1  mt-4 sm:grid-cols-2">
            <div>
              <label
                className=" flex flex-col text-white dark:text-gray-200 my-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                id="title"
                {...register("title", { required: true })}
                type="text"
                className="block w-full px-4 py-2 my-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {errors.title && (
                <p className="text-red-500">Title is required</p>
              )}
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200 my-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                {...register("message", { required: true })}
                className="block w-full px-4 py-2 my-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              ></textarea>
              {errors.message && (
                <p className="text-red-500">Description is required</p>
              )}
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button className="px-6  w-full leading-5 text-white transition-colors duration-200 transform py-4  bg-teal-500 hover:bg-teal-600 rounded">
              Create
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
