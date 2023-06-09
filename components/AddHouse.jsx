import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { add } from "../features/house/houseSlice";

const url =
  process.env.NODE_ENV == `production` ? "" : "http://localhost:5000/house";

export default function AddHouse() {
  const dispatch = useDispatch();

  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ location, price }),
        headers: { "Content-Type": "application/json" },
      });
      const house = await response.json();

      dispatch(add(house));
      setLocation("");
      setPrice(0);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Location
          <input
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
        </label>
        <label>
          Price
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
