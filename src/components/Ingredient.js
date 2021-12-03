import React from "react";

export default function Ingredient({ name, amount }) {
  return (
    <li>
      <strong>{name}</strong>&nbsp;
      <span>{amount}</span>
    </li>
  );
}
