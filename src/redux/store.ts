import { combineReducers, createStore } from "redux";

import { notesReducer } from "./notes/notesReducer";
import { remindersReducer } from "./reminders/remindersReducer";

const reducers = combineReducers({
  notes: notesReducer,
  reminders: remindersReducer,
});

export const store = createStore(reducers);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
