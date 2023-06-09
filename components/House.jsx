import React, { useState, useContext } from "react";

import EditHouse from "./EditHouse";

import { useSelector, useDispatch } from "react-redux";
import { destroy } from "../features/house/houseSlice";

import { houseIDContext } from "../contexts/houseIDContext";

export default function House() {
  const houseID = useContext(houseIDContext);

  const house = useSelector((state) => state.houses[houseID]);
  const dispatch = useDispatch();

  async function handleDelete() {
    const url =
      process.env.NODE_ENV == `production` ? "" : "http://localhost:5000/house";
    try {
      const response = await fetch(url + `/${house._id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      dispatch(destroy(house));
    } catch (error) {
      console.log(error.message);
    }
  }

  const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      {!isEdit ? (
        <div>
          <h3>ID: {house._id}</h3>
          <p>Location: {house.location}</p>
          <p>Price: {house.price}</p>
          <button onClick={() => setIsEdit(true)}>edit</button>
          <button onClick={handleDelete}>del</button>
        </div>
      ) : (
        <EditHouse setIsEdit={setIsEdit} />
      )}
    </div>
  );
}
