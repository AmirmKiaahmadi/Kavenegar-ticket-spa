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
import TextareaInput from "@/components/RHF-fields/textarea-input";
import { toast } from "react-toastify";
import { Button } from "@/components/buttons/submit-button";

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
    if (data?.status !== "closed") {
      const answers: Array<string> | undefined = data?.answers;
      answers?.push(payload.answer);
      const mutatePayload: IMutatePayload = {
        id: params.ticket_id,
        answers: answers,
      };
      mutate(mutatePayload);
    } else {
      toast.error("Ticket also closed!");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" w-full mt-20  flex justify-center"
    >
      <div className=" w-full bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 p-6">
        <div className=" grid-cols-1  mt-4 sm:grid-cols-2">
          <TextareaInput
            name="answer"
            label="Answer"
            register={register}
            errors={errors}
          />
        </div>
        <div className="flex justify-end mt-6">
          <Button
            title="Send"
            className="px-6  w-full leading-5 text-white transition-colors duration-200 transform py-4  bg-teal-500 hover:bg-teal-600 rounded"
          />
          <Button
            title="Close Ticket"
            onClick={() => closeMutate()}
            type="button"
            className="px-6 mx-2  w-full leading-5 text-white transition-colors duration-200 transform py-4  bg-red-600 hover:bg-red-400 rounded"
          />
        </div>
      </div>
    </form>
  );
}
