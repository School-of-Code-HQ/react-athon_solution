import React from "react";

function ListItem({ text, onDeleteClick }) {
  return (
    <li>
      {text}
      <button onClick={onDeleteClick}>X</button>
    </li>
  );
}

export default ListItem;
