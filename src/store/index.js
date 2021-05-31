import { configureStore, createSlice } from "@reduxjs/toolkit";

let y = new Date()
  .toLocaleDateString("en-us", {
    year: "numeric",
  })
  .slice(2);
y = "'" + y;

const z = `${new Date().toLocaleDateString("en-us", {
  weekday: "long",
  month: "long",
  day: "numeric",
})} ${y}`;

const initialState = {
  cityName: "london",
  cityDegree: "06",
  time: `${new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })}`,
  day: `${z}`,
  description: "clear",
  cloudyNo: "12%",
  humidityNo: "78%",
  wind: "1m/s",
  rain: "0mm",
};

const dataSlice = createSlice({
  name: "Data",
  initialState,
  reducers: {
    getCityName(state, action) {
      return (state = action.payload);
    },
  },
});

const initialResult = ["birmingham", "manchester", "new york", "california"];
const pastResults = createSlice({
  name: "past",
  initialState: initialResult,
  reducers: {
    change(state, action) {
      if (state.includes(action.payload)) {
        const editedState = state.filter((ev) => ev !== action.payload);
        editedState.unshift(action.payload);
        return (state = editedState);
      }
      state.unshift(action.payload);
      state.pop();
      return state;
    },
  },
});

const store = configureStore({
  reducer: { data: dataSlice.reducer, past: pastResults.reducer },
});

export const dataActions = dataSlice.actions;
export const pastActions = pastResults.actions;
export default store;
