import { QueryOptions, useMutation } from "@tanstack/react-query";
import { mutationRequest } from "../common/mutationRequest";

export const useGQLMutation = (query: any, variables: any = {}, options: QueryOptions = {}) => {
  const mutationFn = async () => await mutationRequest(query, variables);

  return useMutation({ mutationFn, ...options });
};
