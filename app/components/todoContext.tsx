// https://plainenglish.io/blog/using-sqlite-with-next-js-13
import { createContext, useState } from "react";
import { Todo } from "./UI";
import React from "react";
import { ModalContext } from "./modalContext";
import { useUser } from "@clerk/nextjs";
import { log } from "console";

type TodoContext = {
  todos: Todo[];
  activeID: number;
  userEmail: string;
  onDelete: (id: number) => void;
  onSave: (id: number, description: string) => void;
  changeActiveID: (id: number) => void;
};

export const TodoContext = createContext<TodoContext | null>(null);

const TodoProvider = ({ children }: React.PropsWithChildren) => {
  const [todos, setTodos] = useState([
    { id: 1, todo: "Step 1" },
    { id: 2, todo: "Step 2" },
    { id: 3, todo: "Step 3" },
    { id: 4, todo: "Step 4" },
  ]);
  const [activeID, setActiveID] = useState(0);
  const modal = React.useContext(ModalContext);
  const [nextID, setNextID] = useState(todos.length + 1);
  const userEmail = useUser().user?.primaryEmailAddress?.emailAddress!;

  const handleNextID = () => {
    setNextID(nextID + 1);
  };

  const handleDelete = (id: number) => {
    const index = todos.findIndex((item) => {
      return item.id === id;
    });
    setTodos(todos.toSpliced(index, 1));
  };

  const SendPostRequest = async (id: string, description: string) => {
    const result = await fetch("/api/1", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: id,
        description: description,
      }),
      method: "POST",
    });
  };

  const SendGetRequest = async (id: string) => {
    const result = await fetch("/api/1", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: id,
      }),
      method: "GET",
    });
  };

  console.log(SendGetRequest(userEmail));

  const onSave = async (id: number, item: string) => {
    console.log(userEmail);
    const index = todos.findIndex((item) => {
      return item.id === id;
    });
    if (id === 0) {
      setTodos(todos.toSpliced(todos.length, 0, { id: nextID, todo: item }));
      console.log(nextID);
      handleNextID();
      console.log(nextID);
    } else {
      setTodos(todos.toSpliced(index, 1, { id, todo: item }));
    }
    await SendPostRequest(userEmail!, item);
    setActiveID(0);
  };

  const changeActiveID = (id: number) => {
    setActiveID(id);
  };

  return (
    <>
      <TodoContext.Provider
        value={{
          todos,
          userEmail,
          activeID,
          onDelete: handleDelete,
          onSave,
          changeActiveID,
        }}
      >
        {children}
      </TodoContext.Provider>
    </>
  );
};
export default TodoProvider;
