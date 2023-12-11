import { graphql } from "@/gql";

export const GET_ALL_USERS = graphql(`
  query GetAllUsers {
    getAllUsers {
      id
      fullname
      email
      avatar
    }
  }
`);
