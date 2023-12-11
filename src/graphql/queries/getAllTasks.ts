import { gql } from "graphql-tag";

export const GET_ALL_TASKS = gql`
  query getAllTasks($statusId: String, $title: String, $userId: String) {
    tasks(statusId: $statusId, title: $title, userId: $userId) {
      taskTitle
      taskDescription
      status {
        id
        statusName
      }
      assignUser {
        id
        fullname
        email
        avatar
      }
    }
  }
`;
