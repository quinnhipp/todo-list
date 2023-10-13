import { IconButton } from "@mui/material";
import List from "./list";
import NewButton from "./newButton";

const UI = () => {
  return (
    <div>
      <div className="flex justify-around pt-5 md:mt-10 border-b-2 border-slate-800 dark:border-slate-300 pb-5">
        <p className="text-5xl w-fit text-slate-800 dark:text-slate-300">
          To-Do List
        </p>
        <NewButton />
      </div>
      <div className="m-5 md:m-10">
        <List />
      </div>
    </div>
  );
};
export default UI;
