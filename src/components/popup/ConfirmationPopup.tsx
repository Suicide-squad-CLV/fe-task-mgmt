import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import Image from "next/image";

type Props = {
  isShow: boolean;
  handleCloseDialog: () => void;
  onConfirmation?: () => void;
  onCancel?: () => void;
};

const ConfirmationPopup = ({ isShow, handleCloseDialog, onCancel, onConfirmation }: Props) => {
  return (
    <Dialog open={isShow} onOpenChange={handleCloseDialog}>
      <DialogContent className="flex flex-col gap-10 sm:min-w-[300px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">{"Are you sure you want to delete this task?"}</DialogTitle>
        </DialogHeader>

        <DialogFooter>
          <Button onClick={onConfirmation}>{"Yes"}</Button>
          <Button variant="destructive" onClick={onCancel}>
            {"Cancel"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationPopup;
