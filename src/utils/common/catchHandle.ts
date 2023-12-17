import { toast } from "react-toastify";
import { ApiReponse } from "../type/response";

export const catchHandle = (e: any): void => {
  const response: ApiReponse = e?.response;

  try {
    if (response.errors.length > 0) {
      const message = response.errors[0].message;
      if (response.errors[0].statusCode === 401) {
        toast.warning("Login session expired");
      } else {
        toast.warning(message);
      }
    }
  } catch {
    toast.warning("Something went wrong");
  }
};
