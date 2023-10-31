"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import NewButton from "./newButton";
import { useState } from "react";
import { TextField } from "@mui/material";
import { ModalContext } from "./modalContext";
import { TodoContext } from "./todoContext";
import { useUser } from "@clerk/nextjs";

const ItemModal = () => {
  const modal = React.useContext(ModalContext);
  const todos = React.useContext(TodoContext);
  const [description, setDescription] = useState("");
  const { user } = useUser();
  const emailAddress = user?.primaryEmailAddress?.emailAddress ?? "";

  return (
    <div>
      <Modal
        open={modal!.open}
        onClose={modal?.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="bg-slate-700"
      >
        <>
          <div className="flex flex-col pt-5 items-center gap-10">
            <div className="w-3/4 h-1/2 text-center text-4xl">
              {modal?.isEdit ? "Edit Item" : "New Item"}
            </div>
            <div className="p-2 bg-slate-500 w-1/2 rounded-3xl">
              <TextField
                label="Description"
                value={description}
                className="w-full bg-slate-500 text-white"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex gap-6">
              <Button
                onClick={() => modal?.handleClose()}
                className="hover:shadow-md hover:shadow-white px-4 py-2 border-2 border-red-400 bg-slate-500 rounded-3xl text-white"
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  if (modal?.isEdit) {
                  } else {
                    todos?.onSave(todos.activeID, emailAddress, description);
                  }
                  modal?.handleClose();
                }}
                className="hover:shadow-md hover:shadow-white px-4 py-2 border-2 border-red-400 bg-slate-500 rounded-3xl text-white"
              >
                {modal?.isEdit ? "Save Edit" : "Save New"}
              </Button>
            </div>
          </div>
        </>
      </Modal>
    </div>
  );
};
export default ItemModal;
