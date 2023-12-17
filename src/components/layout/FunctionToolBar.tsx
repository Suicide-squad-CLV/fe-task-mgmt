"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { PlusSmallIcon } from "@heroicons/react/24/solid";
import ModifyTaskPopup from "../popup/ModifyTaskPopup";
import { useGQLQuery } from "@/utils/hooks/useGQLQuery";
import { QUERY_ALL_STATUS, QUERY_ALL_USERS } from "@/utils/common/constants";
import { GET_ALL_USERS } from "@/graphql/queries/getAllUsers";
import { GET_ALL_STATUS } from "@/graphql/queries/getAllStatus";

type Props = {};

const FunctionToolBar = (props: Props) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [userList, setUserList] = useState<any[]>([]);
  const [statusList, setStatusList] = useState<any[]>([]);
  const { data }: any = useGQLQuery(QUERY_ALL_USERS, GET_ALL_USERS, {
    keyword: "",
  });

  const allStatus: any = useGQLQuery(QUERY_ALL_STATUS, GET_ALL_STATUS, {});
  const convertToDataList = (data: any[]) => {
    const newDataList = data.map((item) => ({
      value: item.id,
      label: item.fullname,
      avtUrl: item.avatar,
      email: item.email,
    }));

    return newDataList;
  };

  const convertToStatusList = (data: any[]) => {
    const newDataList = data.map((item) => ({
      value: item.id,
      label: item.statusName,
    }));

    return newDataList;
  };

  useEffect(() => {
    if (data) {
      setUserList(convertToDataList(data.getAllUsers));
    }
    if (allStatus.data?.statusList) {
      setStatusList(convertToStatusList(allStatus.data.statusList));
    }
  }, [data, allStatus.data]);

  return (
    <>
      <div className="mb-8 flex h-12 items-center justify-between">
        <p className="text-3xl font-medium text-neutral-700">Tasks</p>
        <div className="relative flex items-center gap-4">
          <Button className="bg-blue-600 px-4 py-2 hover:bg-blue-700" onClick={() => setIsShow(true)}>
            <PlusSmallIcon className="h-6 w-6" /> New Task
          </Button>
          <ModifyTaskPopup
            isShow={isShow}
            handleCloseDialog={() => setIsShow(false)}
            userList={userList}
            statusList={statusList}
          />
        </div>
      </div>
    </>
  );
};

export default FunctionToolBar;
