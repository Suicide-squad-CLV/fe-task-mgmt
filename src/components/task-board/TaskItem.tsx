import React, { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Card } from "../ui/card";
import { TaskInfo } from "./GqlType";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useGeneralStore } from "@/stores/useGeneralStore";
import ModifyTaskPopup from "../popup/ModifyTaskPopup";
import ConfirmationPopup from "../popup/ConfirmationPopup";
import { useGQLMutation } from "@/utils/hooks/useGQLMutation";
import { UPDATE_TASK } from "@/graphql/mutations/updateTask";
import { ARCHIVED_TASK_ID, QUERY_ALL_TASKS } from "@/utils/common/constants";
import { toast } from "react-toastify";
import { QueryClient, useQueryClient } from "@tanstack/react-query";

type Props = {
  task: TaskInfo;
};

const TaskItem = ({ task }: Props) => {
  const queryClient = useQueryClient();
  const updateTask = useGQLMutation(UPDATE_TASK);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const setDraggedTask = useGeneralStore((store) => store.setDraggedTask);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleConfirm = () => {
    const payload = {
      updateTaskId: task.id,
      updatedTaskData: {
        deleteFlag: "Y",
      },
    };

    updateTask.mutate(payload, {
      onSuccess: (res: any) => {
        handleClosePopup();
        toast.success("Task was removed");
        queryClient.invalidateQueries({ queryKey: [...QUERY_ALL_TASKS] });
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  const imageSrc = task.assignUser?.avatar;
  console.log(imageSrc);

  return (
    <>
      <Card className="my-2 cursor-grab p-3" draggable onDragStart={() => setDraggedTask(task)}>
        <div className="flex flex-col gap-3 break-words">
          <p className="text-lg font-medium">{task.taskTitle}</p>
          <p className="w-full text-base">{task.taskDescription}</p>
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className="cursor-pointer p-2 hover:text-blue-500"
                onClick={() => {
                  setShowPopup(true);
                }}
              >
                <PencilIcon className="h-5 w-5" />
              </span>
              {task.status?.id !== ARCHIVED_TASK_ID && (
                <span
                  className="cursor-pointer p-2 hover:text-blue-500"
                  onClick={() => {
                    setShowConfirmation(true);
                  }}
                >
                  <TrashIcon className="h-5 w-5 " />
                </span>
              )}
            </div>
            {task?.assignUser?.id && (
              <div
                className="relative z-0"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <Avatar className="flex h-8 w-8 rounded-full border">
                  {imageSrc ? <AvatarImage src={imageSrc} /> : <AvatarImage src="/image/user-icon.png" />}
                </Avatar>
              </div>
            )}
            <span
              className="absolute -top-8 right-0 z-50 w-max max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap rounded-lg bg-gray-500 px-2 py-1 text-center text-sm text-white opacity-90 group-hover:block"
              style={{ display: `${showTooltip ? "block" : "none"}` }}
            >
              {task.assignUser?.fullname}
            </span>
          </div>
        </div>
      </Card>
      <ModifyTaskPopup isShow={showPopup} handleCloseDialog={handleClosePopup} editMode taskData={task || {}} />
      <ConfirmationPopup
        isShow={showConfirmation}
        handleCloseDialog={handleCloseConfirmation}
        onConfirmation={handleConfirm}
        onCancel={handleCloseConfirmation}
      />
    </>
  );
};

export default TaskItem;
