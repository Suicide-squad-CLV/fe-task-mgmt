"use client";
import React, { useEffect, useState } from "react";

import { Button } from "../ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import ControlledInput from "../form-field/controlled/ControlledInput";
import { taskFormSchema } from "@/utils/validation/task-form";
import ControlledTextarea from "../form-field/controlled/ControlledTexarea";
import { ControlledSelect } from "../form-field/controlled/ControlledSelect";
import { ControlledCombobox } from "../form-field/controlled/ControlledCombobox";
import { useGQLQuery } from "@/utils/hooks/useGQLQuery";
import { QUERY_ALL_STATUS, QUERY_ALL_USERS } from "@/utils/common/constants";
import { GET_ALL_STATUS } from "@/graphql/queries/getAllStatus";
import { GET_ALL_USERS } from "@/graphql/queries/getAllUsers";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { useGQLMutation } from "@/utils/hooks/useGQLMutation";
import { ADD_TASK } from "@/graphql/mutations/addTask";
import { toast } from "react-toastify";

type userDataType = {
  fullname: string;
  email: string;
  avatar: string;
  id: string;
};

type Props = {
  onEdit?: boolean;
  userList?: any[];
  statusList?: any[];
  handleCloseDialog: () => void;
};

const TaskForm = ({ onEdit, userList = [], statusList = [], handleCloseDialog }: Props) => {
  const addTask = useGQLMutation(ADD_TASK);
  const form = useForm<z.infer<typeof taskFormSchema>>({
    resolver: zodResolver(taskFormSchema),
    defaultValues: {
      title: "",
      description: "",
      assignee: "",
      status: statusList[0]?.value,
    },
    shouldFocusError: true,
  });

  // 2. Define a submit handler.
  function onSubmit(formValues: z.infer<typeof taskFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const newTaskData = {
      newTaskData: {
        title: formValues.title,
        description: formValues.description,
        assignUserId: formValues.assignee ? Number(formValues.assignee) : null,
        statusId: formValues.status,
      },
    };

    addTask.mutate(newTaskData, {
      onSuccess: (res: any) => {
        console.log(res);
        form.reset();
        handleCloseDialog();
        toast.success("New task was added!");
      },
    });
  }

  const CustomOptions = ({ avtUrl, fullname, email, key }: any) => {
    return (
      <div className="flex items-center gap-3" key={key}>
        <Avatar className="m-auto h-6 w-6">
          <AvatarImage src={avtUrl} />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <span>
          {fullname} <span>{email}</span>
        </span>
      </div>
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <ControlledInput
          control={form.control}
          id="title"
          label="Title"
          name="title"
          placeholder="Enter task title"
          type="text"
        />

        <ControlledTextarea
          control={form.control}
          id="description"
          label="Description"
          name="description"
          placeholder="Enter task description"
        />

        <ControlledSelect
          control={form.control}
          dataList={statusList}
          defaultValue={statusList[0]?.value}
          label="Status"
          name="status"
        />

        <ControlledCombobox
          control={form.control}
          dataList={userList}
          name="assignee"
          label="Assignee"
          placeholder="Select Assignee"
          onSelect={(value) => {
            form.setValue("assignee", value);
          }}
          CustomOptionsItem={CustomOptions}
        />

        <Button type="submit" className="bg-blue-600 px-4 py-2 hover:bg-blue-700">
          Create
        </Button>
      </form>
    </Form>
  );
};

export default TaskForm;
