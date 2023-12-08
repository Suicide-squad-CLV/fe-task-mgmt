import { graphql } from "@/gql";

export const LOGIN_USER = graphql(`
  mutation LoginUser($email: String!, $password: String!) {
    login(loginInput: { email: $email, password: $password }) {
      user {
        id
        email
        fullname
      }
      error {
        code
        message
      }
    }
  }
`);
