import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHouses = createAsyncThunk("houses/fetchHouese", async () => {
  const url =
    process.env.NODE_ENV == `production` ? "" : "http://localhost:5000/house";
  const response = await fetch(url);
  const houses = await response.json();

  return houses;
});

export const houseSlice = createSlice({
  name: "houses",
  initialState: {},
  reducers: {
    add: (state, action) => {
      state[action.payload._id] = action.payload;
    },
    update: (state, action) => {
      state[action.payload._id] = action.payload;
    },
    destroy: (state, action) => {
      delete state[action.payload._id];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHouses.fulfilled, (state, action) => {
      action.payload.forEach((house) => (state[house._id] = house));

    });
  },
});

export const { add, update, destroy } = houseSlice.actions;

export default houseSlice.reducer;
