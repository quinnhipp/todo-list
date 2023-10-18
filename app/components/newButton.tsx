"use client";
import AddIcon from "@mui/icons-material/Add";
import { Fab, IconButton } from "@mui/material";

const newButtonHandler = () => {
  alert("This will do something soon");
};

const NewButton = (props: any) => {
  return (
    <div className="bg-slate-300 rounded-full text-slate-800 bg-clip-text mb-4">
      <Fab
        aria-label="new"
        color="inherit"
        size="medium"
        onClick={props.onClick}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};
export default NewButton;
