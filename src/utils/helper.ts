import dayjs from "dayjs";
import { eventTimeStart, eventTimeEnd } from "../configs/config";

export const checkEventStarted = (): boolean => {
  let currentTime: number = dayjs().valueOf();
  let eventStart: number = dayjs(eventTimeStart).valueOf();

  return currentTime >= eventStart;
};

export const checkEventEnded = (): boolean => {
  let currentTime: number = dayjs().valueOf();
  let eventEnd: number = dayjs(eventTimeEnd).valueOf();

  return currentTime >= eventEnd;
};
