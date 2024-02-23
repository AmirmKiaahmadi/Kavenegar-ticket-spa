"use client";
import React from "react";
import { useForm } from "react-hook-form";
import useGetTickets from "../tickets/hooks/useGetTickets";
import useAddTicket from "./hooks/useAddTicket";
import { useRouter } from "next/navigation";
import { TicketFormValues } from "@/app/tickets/create-ticket/interface";
import TextInput from "@/components/RHF-fields/text-input";
import TextareaInput from "@/components/RHF-fields/textarea-input";
import AcceptButton from "@/components/buttons/accepted-button";

export default function AddTicketForm() {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=" grid-cols-1  mt-4 sm:grid-cols-2">
        <TextInput
          name="title"
          label="Title"
          register={register}
          errors={errors}
        />
        <TextareaInput
          name="message"
          label="Message"
          register={register}
          errors={errors}
        />
      </div>
      <div className="flex justify-end mt-6">
        <AcceptButton name="Create" />
      </div>
    </form>
  );
}
