import { createContext, useState } from "react";
import { Todo } from "./UI";

type TodoContext = {
  todos: Todo[];
  onDelete: (id: number) => void;
};

export const TodoContext = createContext<TodoContext | null>(null);

const TodoProvider = ({ children }: React.PropsWithChildren) => {
  const [todos, setTodos] = useState([
    { id: 1, todo: "Step 1" },
    { id: 2, todo: "Step 2" },
    { id: 3, todo: "Step 3" },
    { id: 4, todo: "Step 4" },
  ]);

  const handleDelete = (id: number) => {
    const index = todos.findIndex((item) => {
      return item.id === id;
    });
    setTodos(todos.toSpliced(index, 1));
  };

  return (
    <>
      <TodoContext.Provider value={{ todos, onDelete: handleDelete }}>
        {children}
      </TodoContext.Provider>
    </>
  );
};
export default TodoProvider;
