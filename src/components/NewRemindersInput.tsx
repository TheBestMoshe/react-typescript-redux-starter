import React, { ChangeEvent } from "react";
import { Reminder } from "../redux/reminders/remindersReducer";

interface NewReminderInputProps {
  addReminder(reminder: Reminder): void;
}

export const NewReminderInput: React.FC<NewReminderInputProps> = ({
  addReminder,
}) => {
  const [reminderTitle, setReminderTitle] = React.useState("");

  const updateReminder = (event: ChangeEvent<HTMLInputElement>) => {
    setReminderTitle(event.target.value);
  };

  const onAddReminderClick = () => {
    addReminder({
      title: reminderTitle,
      timestamp: Date.now(),
      id: (Math.random() * 100).toString(),
    });

    console.log({
      title: reminderTitle,
      timestamp: Date.now(),
    });
    setReminderTitle("");
  };

  return (
    <div>
      <input
        onChange={updateReminder}
        value={reminderTitle}
        type="text"
        name="note"
        placeholder="Reminder"
      />
      <button onClick={onAddReminderClick}>Add reminder</button>
    </div>
  );
};
