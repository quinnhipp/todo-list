"use client";
import { IconButton } from "@mui/material";
import List from "./list";
import NewButton from "./newButton";
import {
  SignIn,
  SignInButton,
  SignOutButton,
  SignUp,
  UserButton,
  useAuth,
} from "@clerk/nextjs";
import ItemModal from "./itemModal";
import { useState } from "react";

export type Todo = {
  id: number;
  todo: string;
};

const UI = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const [open, setOpen] = useState<boolean>(false);
  const [todos, setTodos] = useState([
    { id: 1, todo: "Step 1" },
    { id: 2, todo: "Step 2" },
    { id: 3, todo: "Step 3" },
    { id: 4, todo: "Step 4" },
  ]);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleDelete = (id: number) => {
    const index = todos.findIndex((item) => {
      return item.id === id;
    });
    setTodos(todos.toSpliced(index, 1));
  };

  return (
    <div>
      <div className="flex justify-around pt-5 md:mt-10 border-b-2 border-slate-800 dark:border-slate-300 pb-5">
        <p className="text-5xl w-fit text-slate-800 dark:text-slate-300">
          To-Do List
        </p>
        <div className="mt-auto mb-auto">
          {!userId && (
            <SignInButton>
              <button className="px-4 py-2 bg-slate-300 text-slate-800 rounded-full">
                Login
              </button>
            </SignInButton>
          )}
          {userId && (
            <div className="p-0.5 bg-slate-300 text-clip rounded-full">
              <UserButton afterSignOutUrl="/" />
            </div>
          )}
        </div>
      </div>
      <div className="m-5 md:m-10">
        {userId && <NewButton onClick={handleOpen} />}
        {userId && open && (
          <ItemModal onNew={handleOpen} open={open} onClose={handleClose} />
        )}
        {userId && (
          <List onEdit={handleOpen} onDelete={handleDelete} todos={todos} />
        )}
      </div>
    </div>
  );
};
export default UI;
