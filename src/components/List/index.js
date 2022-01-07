import React from "react";
import ListItem from "../ListItem";

function List({ items, onItemDeleteClick }) {
  return (
    <ul>
      {items.map(function (item, index) {
        function deleteItem() {
          onItemDeleteClick(index);
        }
        return <ListItem key={index} text={item} onDeleteClick={deleteItem} />;
      })}
    </ul>
  );
}

export default List;
