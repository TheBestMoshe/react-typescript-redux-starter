import React from "react";
import { useAppDispatch } from "../redux/hooks";

import { deleteReminder } from "../redux/reminders/actions";

interface ReminderCardProps {
  title: string;
  timestamp: number;
  id: string;
}

export const ReminderCard: React.FC<ReminderCardProps> = ({
  title,
  timestamp,
  id,
}) => {
  const dispatch = useAppDispatch();

  const onDeleteReminder = () => {
    console.log("should delete");
    dispatch(deleteReminder(id));
  };

  return (
    <>
      <h3>{title}</h3>
      <small>{new Date(timestamp).toISOString()}</small>
      <button onClick={onDeleteReminder}>Delete</button>
    </>
  );
};
