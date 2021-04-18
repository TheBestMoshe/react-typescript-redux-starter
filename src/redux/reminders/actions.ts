import { Reminder } from "./remindersReducer";

export type AddAction = { type: "ADD_REMINDER"; payload: Reminder };
export type DeleteAction = { type: "DELETE_REMINDER"; payload: string };

export const addReminder = (reminder: Reminder): AddAction => ({
  type: "ADD_REMINDER",
  payload: reminder,
});

export const deleteReminder = (id: string): DeleteAction => ({
  type: "DELETE_REMINDER",
  payload: id,
});
