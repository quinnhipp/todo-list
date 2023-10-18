"use client";
import Checkbox from "@mui/material/Checkbox";
import CircleIcon from "@mui/icons-material/Circle";
import CircleBorder from "@mui/icons-material/CircleOutlined";
import EditIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { useState } from "react";
import { IconButton } from "@mui/material";
import { Todo } from "./UI";

type Props = {
  description: string;
  onEdit: () => void;
  onDelete: (id: number) => void;
  item: Todo;
};

const ListItem = ({ description, onEdit, onDelete, item }: Props) => {
  const [checked, setChecked] = useState(false);

  const checkHandler = () => {
    setChecked(!checked);
    console.log("Flip");
  };

  return (
    <div>
      <div className="flex bg-slate-300 text-slate-800 dark:text-slate-300 dark:bg-slate-800 items-center border-slate-800 dark:border-slate-300 border-2 rounded-full">
        <Checkbox
          icon={<CircleBorder style={{ color: "#cbd5e1" }} />}
          checkedIcon={<CircleIcon style={{ color: "#cbd5e1" }} />}
          onChange={checkHandler}
        />
        <p className={`${checked ? "line-through" : ""}`}>{description}</p>
        <IconButton
          aria-label="edit"
          className={`ml-auto mb-auto ${checked ? "hidden" : "block"}`}
          color="inherit"
          size="small"
          onClick={onEdit}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          className={`ml-1 mr-2 mb-auto ${checked ? "hidden" : "block"}`}
          color="error"
          size="small"
          onClick={() => onDelete(item.id)}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};
export default ListItem;
