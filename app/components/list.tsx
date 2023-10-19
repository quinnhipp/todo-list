"use client";
import ListItem from "./listItem";
import SortableList, { SortableItem } from "react-easy-sort";
import arrayMove from "array-move";
import { useContext, useState } from "react";
import { Todo } from "./UI";
import { TodoContext } from "./todoContext";
import { ModalContext } from "./modalContext";

const List = () => {
  const todos = useContext(TodoContext);

  return (
    <div>
      <div className="flex flex-col gap-4">
        {todos?.todos.map((item) => (
          <ListItem description={item.todo} key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default List;
