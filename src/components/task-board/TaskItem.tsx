import React, { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Card } from "../ui/card";
import { TaskInfo } from "./GqlType";
import { Avatar, AvatarImage } from "../ui/avatar";

type Props = {
  task: TaskInfo;
};

const TaskItem = ({ task }: Props) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  return (
    <Card className="my-2 p-3">
      <div className="flex flex-col gap-3 break-words">
        <p className="text-lg font-medium">{task.taskTitle}</p>
        <p className="w-full text-base">{task.taskDescription}</p>
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <PencilIcon className="mr-2 h-4 w-4" />
            <TrashIcon className="mr-2 h-4 w-4" />
          </div>
          <div
            className="relative z-0"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <Avatar className="flex h-8 w-8 rounded-full border">
              <AvatarImage src={task.assignUser?.avatar || ""} />
            </Avatar>
          </div>
          <span
            className="absolute -top-8 right-0 z-50 w-max max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap rounded-lg bg-gray-500 px-2 py-1 text-center text-sm text-white opacity-90 group-hover:block"
            style={{ display: `${showTooltip ? "block" : "none"}` }}
          >
            {task.assignUser?.fullname}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default TaskItem;
