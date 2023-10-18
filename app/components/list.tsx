"use client";
import ListItem from "./listItem";
import SortableList, { SortableItem } from "react-easy-sort";
import arrayMove from "array-move";
import { useState } from "react";
import { Todo } from "./UI";

type Props = {
  onEdit: () => void;
  onDelete: (id: number) => void;
  todos: Todo[];
};

const List = ({ onEdit, onDelete, todos }: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        {todos.map((item) => (
          <ListItem
            description={item.todo}
            key={item.id}
            onEdit={onEdit}
            onDelete={onDelete}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};
export default List;
