"use client";
import React from "react";
import UI from "./components/UI";
import TodoProvider from "./components/todoContext";
import ModalProvider from "./components/modalContext";
import { Button } from "@mui/material";

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
