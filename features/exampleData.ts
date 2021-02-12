import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

export const exampleDataInitialState: { name: string; users: number }[] = [
  {
    name: 'January',
    users: 76,
  },
  {
    name: 'February',
    users: 230,
  },
  {
    name: 'March',
    users: 240,
  },
  {
    name: 'April',
    users: 280,
  },
  {
    name: 'May',
    users: 100,
  },
];

const exampleDataSlice = createSlice({
  name: 'exampleData',
  initialState: exampleDataInitialState,
  reducers: {
    addMonth(state, action) {
      const { users } = action.payload;
      const lastMonth = state[state.length - 1].name;
      const nextMonth = moment(lastMonth, 'MMMM')
        .add(1, 'month')
        .format('MMMM');
      state.push({ users, name: nextMonth });
    },
    removeMonth(state, action) {
      const { name } = action.payload;
      return state.filter(({ name: monthName }) => name !== monthName);
    },
  },
});

export const { addMonth, removeMonth } = exampleDataSlice.actions;
export const exampleDataReducer = exampleDataSlice.reducer;
