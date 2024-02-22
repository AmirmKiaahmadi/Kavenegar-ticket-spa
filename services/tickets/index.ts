import request from "../axios";
import { ITask } from "./interface";

export const getTasks = async () => {
  const { data }: { data: Array<ITask> } = await request.get(`/tickets`);
  return data;
};

export const getSpecificTask = async (id: string | number) => {
  const { data }: { data: ITask } = await request.get(`/tickets/${id}`);
  return data;
};

export const addTask = async (payload: { title: string; message: string }) => {
  const { data }: { data: Array<ITask> } = await request.post(`/tickets`, {
    ...payload,
    answers: [],
    status: "pending",
  });
  return data;
};

export const addAnswerToSpecificTask = async (payload: {
  id: string | number;
  answers: Array<string> | undefined;
}) => {
  const { data }: { data: ITask } = await request.put(
    `/tickets/${payload.id}`,
    {
      answers: payload.answers,
      status: "answered",
    }
  );
  return data;
};

export const closeTask = async (id: string) => {
  const { data }: { data: ITask } = await request.put(`/tickets/${id}`, {
    status: "closed",
  });
  return data;
};
