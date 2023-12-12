export type StatusInfo = { __typename?: "GQLStatus"; id: string; statusName: string };
export type TaskInfo = {
  __typename?: "GQLTask";
  taskTitle: string;
  taskDescription?: string | null;
  status?: { __typename?: "GQLStatus"; id: string; statusName: string } | null;
  assignUser?: { __typename?: "User"; id: string; fullname: string; email: string; avatar?: string | null } | null;
};
