import AddIcon from "@mui/icons-material/Add";
import { Fab, IconButton } from "@mui/material";

const NewButton = () => {
  return (
    <div className="bg-slate-300 rounded-full text-slate-800">
      <Fab aria-label="new" color="inherit" size="medium">
        <AddIcon />
      </Fab>
    </div>
  );
};
export default NewButton;
