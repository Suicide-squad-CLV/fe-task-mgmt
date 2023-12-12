import React, { useEffect, useState } from "react";
import { Square2StackIcon } from "@heroicons/react/24/outline";
import TaskItem from "./TaskItem";
import { GetAllTasksQuery, GqlTask } from "@/gql/graphql";
import { useGQLQuery } from "@/utils/hooks/useGQLQuery";
import { QUERY_ALL_TASKS } from "@/utils/common/constants";
import { GET_ALL_TASKS } from "@/graphql/queries/getAllTasks";
import { StatusInfo, TaskInfo } from "./GqlType";

type Props = {
  status: StatusInfo;
};

const TaskPanel = (props: Props) => {
  const [taskList, setTaskList] = useState<TaskInfo[]>([]);
  const { data }: any = useGQLQuery([...QUERY_ALL_TASKS, props.status.id], GET_ALL_TASKS, {
    statusId: props.status.id,
  });

  useEffect(() => {
    if (data) {
      const { tasks } = data as GetAllTasksQuery;
      setTaskList(tasks);
    }
  }, [data]);

  return (
    <div className=" min-h-[720px] rounded-xl bg-[#eef2fc] p-3">
      <div className="flex items-center text-[#14367B]">
        <Square2StackIcon className="mr-2 h-6 w-6" />
        <span className="text-xl font-medium">{props.status.statusName}</span>
      </div>
      {/* task list */}
      <div>
        {taskList.map((item) => (
          <TaskItem key={item.taskTitle} task={item} />
        ))}
      </div>
    </div>
  );
};

export default TaskPanel;
