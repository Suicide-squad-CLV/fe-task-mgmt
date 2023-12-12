import React from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Card } from "../ui/card";
import { TaskInfo } from "./GqlType";

type Props = {
  task: TaskInfo;
};

const TaskItem = (props: Props) => {
  return (
    <Card className="my-2 p-3">
      <div className="mb-3 flex justify-between">
        <div className="flex w-3/4">
          <div className="mr-10 h-11 w-11 rounded-full bg-gray-300"></div>
          <div className="w-3/5 flex-none overflow-hidden">
            <div>{props.task.assignUser?.fullname}</div>
            <div>{props.task.assignUser?.email}</div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <PencilIcon className="mr-2 h-5 w-5" />
          <TrashIcon className="mr-2 h-5 w-5" />
        </div>
      </div>
      <p className="text-sm">{props.task.taskDescription}</p>
    </Card>
  );
};

export default TaskItem;
