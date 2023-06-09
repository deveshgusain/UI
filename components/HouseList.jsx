import React from "react";

import House from "./House";

import { useSelector } from "react-redux";
import { houseIDContext } from "../contexts/houseIDContext";

export default function HouseList() {
  const houses = useSelector((state) => state.houses);

  return (
    <div>
      {Object.entries(houses).map(([key, house]) => (
        <houseIDContext.Provider value={house._id} key={key}>
          <House />
        </houseIDContext.Provider>
      ))}
    </div>
  );
}
