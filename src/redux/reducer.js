// redux-toolkit

import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
// import actions from "./actions";
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterContacts,
} from "./actions";

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => {
    if (state.find(({ name }) => name === payload.name)) {
      alert(`${payload.name} is already in contacts`);
      return;
    }
    return [payload, ...state];
  },
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [filterContacts]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(null, {
  [fetchContactError]: (_, { payload }) => payload,
  [addContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  isLoading,
  error,
});

// redux;

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       if (
//         state.find(
//           (contact) => contact.name.toLowerCase() === payload.name.toLowerCase()
//         )
//       ) {
//         alert(`${payload.name} is already in contacts`);

//       }
//     return [payload, ...state];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case types.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   items,
//   filter,
// });
