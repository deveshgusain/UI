import { configureStore } from "@reduxjs/toolkit";

import houseReducer from "../features/house/houseSlice";
import mReducer from "../features/step/mSlice";

export default configureStore({
  reducer: {
    houses: houseReducer,
    m: mReducer
  },
});
