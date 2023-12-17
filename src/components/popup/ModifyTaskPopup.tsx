import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import TaskForm from "../form/TaskForm";

type Props = {
  isShow: boolean;
  handleCloseDialog: () => void;
  editMode?: boolean;
  userList?: any[];
  statusList?: any[];
};

const ModifyTaskPopup = ({ isShow, handleCloseDialog, editMode = false, userList, statusList }: Props) => {
  return (
    <Dialog open={isShow} onOpenChange={handleCloseDialog}>
      <DialogContent className="flex flex-col gap-10 sm:min-w-[425px]">
        <DialogHeader>
          <DialogTitle>{`${editMode ? "Update Task" : "Create New Task"}`}</DialogTitle>
        </DialogHeader>
        <TaskForm onEdit={editMode} userList={userList} statusList={statusList} handleCloseDialog={handleCloseDialog} />
      </DialogContent>
    </Dialog>
  );
};

export default ModifyTaskPopup;
