import { graphql } from "@/gql";

export const REGISTER_USER = graphql(`
  mutation RegisterUser($email: String!, $fullname: String!, $password: String!) {
    register(registerInput: { fullname: $fullname, email: $email, password: $password }) {
      user {
        id
        fullname
        email
      }
      error {
        code
        message
      }
    }
  }
`);
