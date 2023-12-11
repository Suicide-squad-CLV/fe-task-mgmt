import { graphql } from "@/gql";

export const GET_PROFILE = graphql(`
  query GetProfile() {
    profile() {
      id
      fullname
      email
      avatar
    }
  }
`);
