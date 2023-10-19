import { createContext, useState } from "react";

type ModalContext = {
  open: boolean;
  isEdit: boolean;
  handleOpenNew: () => void;
  handleOpenEdit: () => void;
  handleClose: () => void;
};

export const ModalContext = createContext<ModalContext | null>(null);

const ModalProvider = ({ children }: React.PropsWithChildren) => {
  const [open, setOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleOpenNew = () => {
    setOpen(true);
    setIsEdit(false);
  };
  const handleOpenEdit = () => {
    setOpen(true);
    setIsEdit(true);
  };
  const handleClose = () => setOpen(false);

  if (ModalContext) {
    return (
      <>
        <ModalContext.Provider
          value={{ open, isEdit, handleOpenNew, handleOpenEdit, handleClose }}
        >
          {children}
        </ModalContext.Provider>
      </>
    );
  }
};
export default ModalProvider;
