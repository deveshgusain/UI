import { createSlice } from "@reduxjs/toolkit";

export const Mslice = createSlice({
    name: "M",
    initialState: {},
    reducers: {
        add: (state, action) => {
            state['Key'] = action.payload.key;
        }
    },
});

export const { add, update } = Mslice.actions;

export default Mslice.reducer;
