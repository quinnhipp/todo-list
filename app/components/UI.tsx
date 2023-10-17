"use client";
import { IconButton } from "@mui/material";
import List from "./list";
import NewButton from "./newButton";
import { SignIn, UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import SignInButton from "./signInButton";

const UI = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  // In case the user signs out while on the page.
  // if (!isLoaded || !userId) {
  //   return null;
  // }

  return (
    <div>
      <div className="flex justify-around pt-5 md:mt-10 border-b-2 border-slate-800 dark:border-slate-300 pb-5">
        <p className="text-5xl w-fit text-slate-800 dark:text-slate-300">
          To-Do List
        </p>
        <div className="mt-auto mb-auto">
          {!userId && <SignInButton />}
          {userId && <UserButton afterSignOutUrl="/" />}
        </div>
      </div>
      <div className="m-5 md:m-10">
        {userId && <NewButton />}
        {userId && <List />}
      </div>
    </div>
  );
};
export default UI;
