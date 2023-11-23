import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './contacts/slice';
import { filterReducer } from './filter/slice';
import { authReducer } from './auth/slice';

const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});

export default store;
