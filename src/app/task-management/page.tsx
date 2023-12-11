"use client";

import { StatusInfo } from "@/components/task-board/GqlType";
import TaskPanel from "@/components/task-board/TaskPanel";
import { Button } from "@/components/ui/button";
import { GetAllStatusQuery } from "@/gql/graphql";
import { GET_ALL_STATUS } from "@/graphql/queries/getAllStatus";
import { QUERY_ALL_STATUS } from "@/utils/common/constants";
import { useGQLQuery } from "@/utils/hooks/useGQLQuery";
import {
  AdjustmentsHorizontalIcon,
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  ListBulletIcon,
  PlusSmallIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function Home() {
  const [statusPanels, setStatusPanels] = useState<StatusInfo[]>([]);
  const { data }: any = useGQLQuery(QUERY_ALL_STATUS, GET_ALL_STATUS, {});

  useEffect(() => {
    if (data) {
      const { statusList } = data as GetAllStatusQuery;
      setStatusPanels(statusList);
    }
  }, [data]);

  return (
    <div className="ml-[261px] flex w-full border-l border-solid dark:bg-[#20212c] ">
      {/* Sidebar */}
      <div className="fixed left-0 top-[69px] z-20 h-screen min-w-[261px] items-center  bg-white dark:bg-[#2b2c37]">
        <div className="mx-auto my-16 h-full  w-[200px]">
          <div className="flex min-h-[750px] flex-col">
            <Button className="w-full bg-blue-600 px-4 py-2 hover:bg-blue-700">
              <ListBulletIcon className="mr-2 h-6 w-6" /> Tasks
            </Button>
            <Button className="mt-auto w-full bg-[#FDF0EC] px-4 py-2 text-[#81290E] hover:bg-[#ddc3bb]">
              <ArrowUturnLeftIcon className="mr-2 h-6 w-6" /> Log out
            </Button>
          </div>
        </div>
      </div>
      <div className="mx-16 mt-28 flex-1">
        {/* Functional */}
        <div className="mb-8 flex h-12 items-center justify-between">
          <p className="text-3xl font-medium text-neutral-700">Tasks</p>
          <div className="flex items-center gap-4">
            <ArrowUturnLeftIcon className="h-6 w-6" />
            <ArrowUturnRightIcon className="h-6 w-6" />
            <UsersIcon className="h-6 w-6" />
            <AdjustmentsHorizontalIcon className="h-6 w-6" />
            <Button className="bg-blue-600 px-4 py-2 hover:bg-blue-700">
              New Task <PlusSmallIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
        {/* Task board */}
        <div className="grid grid-cols-4 gap-6">
          {statusPanels.map((status) => (
            <TaskPanel key={status.id} status={status} />
          ))}
        </div>
      </div>
    </div>
  );
}
