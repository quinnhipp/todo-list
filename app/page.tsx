"use client";
import React from "react";
import ListItem from "./components/listItem";
import List from "./components/list";
import UI from "./components/UI";
import { UserButton } from "@clerk/nextjs";
import TodoProvider from "./components/todoContext";
import ModalProvider from "./components/modalContext";

export default function Home() {
  return (
    <>
      <TodoProvider>
        <ModalProvider>
          <div className="h-screen bg-slate-300 dark:bg-slate-800">
            <UI />
          </div>
        </ModalProvider>
      </TodoProvider>
    </>
  );
}
