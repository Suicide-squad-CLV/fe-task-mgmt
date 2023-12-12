"use client";
import React, { useEffect, useState } from "react";
import TaskPanel from "./TaskPanel";
import { StatusInfo } from "./GqlType";
import { useGQLQuery } from "@/utils/hooks/useGQLQuery";
import { QUERY_ALL_STATUS } from "@/utils/common/constants";
import { GET_ALL_STATUS } from "@/graphql/queries/getAllStatus";
import { GetAllStatusQuery } from "@/gql/graphql";

type Props = {};

const TaskContainer = (props: Props) => {
  const [statusPanels, setStatusPanels] = useState<StatusInfo[]>([]);
  const { data }: any = useGQLQuery(QUERY_ALL_STATUS, GET_ALL_STATUS, {});
  useEffect(() => {
    if (data) {
      const { statusList } = data as GetAllStatusQuery;
      setStatusPanels(statusList);
    }
  }, [data]);
  return (
    <div className="grid grid-cols-4 gap-6">
      {statusPanels.map((status) => (
        <TaskPanel key={status.id} status={status} />
      ))}
    </div>
  );
};

export default TaskContainer;