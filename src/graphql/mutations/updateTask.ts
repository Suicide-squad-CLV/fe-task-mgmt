import { gql } from "graphql-tag";

export const UPDATE_TASK = gql`
  mutation UpdateTask($updateTaskId: Int!, $updatedTaskData: UpdateTaskInput!) {
    updateTask(id: $updateTaskId, updatedTaskData: $updatedTaskData)
  }
`;
