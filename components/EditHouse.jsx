import React, { useState, useContext } from "react";

import { houseIDContext } from "../contexts/houseIDContext";

import { useSelector, useDispatch } from "react-redux";
import { update } from "../features/house/houseSlice";

export default function EditHouse({ setIsEdit }) {
  const houseID = useContext(houseIDContext);

  const dispatch = useDispatch();
  const house = useSelector((state) => state.houses[houseID]);
  const [newPrice, setNewPrice] = useState(house.price);

  async function handleSave() {
    const url =
      process.env.NODE_ENV == `production` ? "" : "http://localhost:5000/house";
    try {
      const response = await fetch(url + `/${house._id}`, {
        method: "PATCH",
        body: JSON.stringify({ price: newPrice }),
        headers: { "Content-Type": "application/json" },
      });

      dispatch(update({ ...house, price: newPrice }));
      setIsEdit(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <p>{house.location}</p>
      <label>
        Price
        <input
          type="number"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
        />
      </label>
      <button onClick={handleSave}>save</button>
    </div>
  );
}
