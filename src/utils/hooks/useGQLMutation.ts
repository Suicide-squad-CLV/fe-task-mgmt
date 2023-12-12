import { QueryOptions, useMutation } from "@tanstack/react-query";
import { mutationRequest } from "../common/mutationRequest";

export const useGQLMutation = (query: any, options: QueryOptions = {}) => {
  const mutationFn = async (payload: any) => await mutationRequest(query, payload);

  return useMutation({ mutationFn, ...options });
};
