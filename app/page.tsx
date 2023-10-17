import React from "react";
import ListItem from "./components/listItem";
import List from "./components/list";
import UI from "./components/UI";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-slate-300 dark:bg-slate-800">
        <UI />
      </div>
    </>
  );
}
