"use client";
import {
  TicketFormValues,
  TicketPageProps,
} from "@/app/tickets/[ticket_id]/interface";
import React from "react";
import { useForm } from "react-hook-form";
import useGetTask from "../hooks/useGetTask";
import useSetAnswer from "../hooks/useSetAnswer";
import useCloseTicket from "../hooks/useSetStatusTicket";
import { IMutatePayload } from "./interface";

export default function AddAnswerForm({ params }: TicketPageProps) {
  const { data, refetch } = useGetTask(params.ticket_id);
  const { mutate } = useSetAnswer(refetch);
  const { mutate: closeMutate } = useCloseTicket(params.ticket_id, refetch);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TicketFormValues>();
  const onSubmit = (payload: TicketFormValues) => {
    const answers: Array<string> | undefined = data?.answers;
    answers?.push(payload.answer);
    const mutatePayload: IMutatePayload = {
      id: params.ticket_id,
      answers: answers,
    };
    mutate(mutatePayload);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" mt-20  flex justify-center"
    >
      <div className=" w-1/2 bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 p-6">
        <div className=" grid-cols-1  mt-4 sm:grid-cols-2">
          <div>
            <label
              className="text-white dark:text-gray-200 my-2"
              htmlFor="description"
            >
              Answer To This Tickets:
            </label>
            <textarea
              id="description"
              {...register("answer", { required: true })}
              className="block w-full px-4 py-2 my-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            ></textarea>
            {errors.answer && (
              <p className="text-red-500">answer is required</p>
            )}
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button className="px-6 mx-2  w-full leading-5 text-white transition-colors duration-200 transform py-4  bg-teal-500 hover:bg-teal-600 rounded">
            add answers
          </button>
          <button
            onClick={() => closeMutate()}
            type="button"
            className="px-6 mx-2  w-full leading-5 text-white transition-colors duration-200 transform py-4  bg-red-600 hover:bg-red-400 rounded"
          >
            Close Ticket
          </button>
        </div>
      </div>
    </form>
  );
}
