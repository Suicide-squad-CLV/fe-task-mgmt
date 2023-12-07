import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MouseEventHandler } from "react";

type Props = {
  type: string;
  id: string;
  placeholder: string;
  name: string;
  label: string;
  Icon?: React.ElementType;
  onIconClick?: MouseEventHandler<HTMLDivElement>;
};

export function CustomInput({ type, id, placeholder, name, label, Icon, onIconClick }: Props) {
  return (
    <div className="relative grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} placeholder={placeholder} name={name} />
      <div onClick={onIconClick} className="absolute right-3 top-1/2">
        {Icon && <Icon className="h-5 w-5" />}
      </div>
    </div>
  );
}
