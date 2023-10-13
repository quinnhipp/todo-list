"use client";
import ListItem from "./listItem";
import SortableList, { SortableItem } from "react-easy-sort";
import arrayMove from "array-move";
import { useState } from "react";

const List = () => {
  const items: string[] = [
    "Task 1: Finish work",
    "Task 2: Go home",
    "Task 3: Wait for Sara",
  ];

  return (
    <div>
      <div className="flex flex-col gap-4">
        {items.map((x) => (
          <ListItem description={x} key={x} />
        ))}
      </div>
    </div>
  );
};
export default List;
