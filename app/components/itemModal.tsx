"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import NewButton from "./newButton";
import { useState } from "react";
import { TextField } from "@mui/material";

type Props = {
  open: boolean;
  edit: boolean;
  onNew: () => void;
  onClose: () => void;
};

const ItemModal = ({ open, edit, onNew, onClose }: Props) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="bg-slate-100"
      >
        <>
          <div className="flex flex-col pt-5 items-center gap-10">
            <div className="w-3/4 h-1/2 text-center text-4xl">
              {edit ? "Edit Item" : "New Item"}
            </div>
            <TextField
              label="Description"
              value={edit ? "Edit" : ""}
              className="w-full"
              color="primary"
            />
          </div>
        </>
      </Modal>
    </div>
  );
};
export default ItemModal;
