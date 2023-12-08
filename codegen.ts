"use-client";

import { CodegenConfig } from "@graphql-codegen/cli";

console.log("BACKEND_API_URL", process.env.BACKEND_API_URL);
const config: CodegenConfig = {
  schema: "http://localhost:5001/graphql",
  documents: ["src/graphql/**/*.ts"],
  ignoreNoDocuments: true,
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
      // config: {
      //   withHooks: true,
      //   withHOC: false,
      //   withComponent: false,
      // },
    },
  },
};

export default config;
