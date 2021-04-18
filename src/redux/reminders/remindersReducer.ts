import { AddAction, DeleteAction } from "./actions";

export type Reminder = {
  id: string;
  title: string;
  timestamp: number;
};

export interface RemindersState {
  reminders: Reminder[];
}

const initialState: RemindersState = {
  reminders: [],
};

export const remindersReducer = (
  state: RemindersState = initialState,
  action: AddAction | DeleteAction
) => {
  console.log({ state });
  switch (action.type) {
    case "ADD_REMINDER": {
      return { ...state, reminders: [...state.reminders, action.payload] };
    }

    case "DELETE_REMINDER": {
      const reminders = state.reminders.filter(
        (reminder) => reminder.id != action.payload
      );
      return { ...state, reminders: [...reminders] };
    }

    default: {
      return state;
    }
  }
};
