import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import React from "react";
import { CustomInput, InputProps } from "../custom/CustomInput";
import { Control } from "react-hook-form";

interface Props extends InputProps {
  control: Control<any>;
  name: string;
  messageClassName?: string;
}

const ControlledInput = ({ control, name, messageClassName, ...props }: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <CustomInput {...field} {...props} />
          </FormControl>
          <FormMessage className={messageClassName} />
        </FormItem>
      )}
    />
  );
};

export default ControlledInput;
