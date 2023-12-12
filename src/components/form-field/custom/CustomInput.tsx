import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { ChangeEventHandler, MouseEventHandler } from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  Icon?: React.ElementType;
  onIconClick?: MouseEventHandler<HTMLDivElement>;
}

const CustomInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, Icon, label, onIconClick, ...props }, ref) => {
    return (
      <div className="relative grid w-full max-w-sm items-center gap-1.5">
        {label && <Label htmlFor={id}>{label}</Label>}
        <Input id={id} {...props} ref={ref} />
        <div onClick={onIconClick} className="absolute right-3 top-1/2">
          {Icon && <Icon className="h-5 w-5" />}
        </div>
      </div>
    );
  },
);

CustomInput.displayName = "CustomInput";

export { CustomInput };
