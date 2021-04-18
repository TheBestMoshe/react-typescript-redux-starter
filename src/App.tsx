import React from "react";

import { NewNoteInput } from "./components/NewNoteInput";
import { addNote } from "./redux/notes/actions";

import { NewReminderInput } from "./components/NewRemindersInput";
import { addReminder } from "./redux/reminders/actions";

import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { Reminder } from "./redux/reminders/remindersReducer";
import { ReminderCard } from "./components/ReminderCard";

function App() {
  const notes = useAppSelector((state) => state.notes);
  const reminders = useAppSelector((state) => state.reminders);

  const dispatch = useAppDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  const onAddReminder = (reminder: Reminder) => {
    dispatch(addReminder(reminder));
  };

  return (
    <>
      <div className="note-area">
        <NewNoteInput addNote={onAddNote} />
        <hr />
        <ul>
          {notes.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>

      <div className="reminder-area">
        <NewReminderInput addReminder={onAddReminder} />
        <hr />
        <ul>
          {reminders.reminders.map((reminder) => (
            <li key={reminder.timestamp}>
              <ReminderCard
                id={reminder.id}
                title={reminder.title}
                timestamp={reminder.timestamp}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
