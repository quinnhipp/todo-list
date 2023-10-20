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

const ItemModal = () => {
  const modal = React.useContext(ModalContext);
  const todos = React.useContext(TodoContext);
  const [description, setDescription] = useState("");

  return (
    <div>
      <Modal
        open={modal!.open}
        onClose={modal?.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="bg-slate-100"
      >
        <>
          <div className="flex flex-col pt-5 items-center gap-10">
            <div className="w-3/4 h-1/2 text-center text-4xl">
              {modal?.isEdit ? "Edit Item" : "New Item"}
            </div>
            <TextField
              label="Description"
              value={description}
              className="w-full"
              color="primary"
              onChange={(e) => setDescription(e.target.value)}
            />
            <div>
              <Button onClick={() => modal?.handleClose()}>Cancel</Button>
              <Button
                onClick={() => {
                  todos?.onSave(todos.activeID, description);
                  modal?.handleClose();
                }}
              >
                Save
              </Button>
            </div>
          </div>
        </>
      </Modal>
    </div>
  );
};
export default ItemModal;
