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
import AcceptButton from "@/components/buttons/accepted-button";
import RejectButton from "@/components/buttons/rejected-button";
import { toast } from "react-toastify";

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
          <AcceptButton name="Send" />
          <RejectButton name="Close Ticket" mutate={closeMutate} />
        </div>
      </div>
    </form>
  );
}
