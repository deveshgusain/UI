import React from "react";

// Components
// import AddHouse from "./AddHouse";
// import HouseList from "./HouseList";

import SelectBusinessKey from "./SelectBusinessKey";

// import { useDispatch, useSelector } from "react-redux";

// import { fetchHouses } from "../features/house/houseSlice";

export default function Main() {
  // const dispatch = useDispatch();
  // dispatch(fetchHouses());

  return (
    <div>
      <SelectBusinessKey />
      {/* <AddHouse />
      <HouseList /> */}
    </div>
  );
}
