import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import NewButton from "./newButton";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ItemModal = (props: any) => {
  //   const [open, setOpen] = useState(true);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  const handleButtonClick = () => {
    props.onClick();
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="w-3/4 h-1/2 text-center">Hello Sir</div>
      </Modal>
    </div>
  );
};
export default ItemModal;
