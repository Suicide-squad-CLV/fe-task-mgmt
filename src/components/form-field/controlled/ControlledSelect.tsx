import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Control } from "react-hook-form";

export type optionDataType = {
  label: string;
  value: string;
  avtUrl?: string;
  email?: string;
};

type ControlledSelectProps = {
  control: Control<any>;
  name: string;
  defaultValue: string;
  dataList: any[];
  label?: string;
};

export function ControlledSelect({ control, name, defaultValue, dataList, label }: ControlledSelectProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <Select onValueChange={field.onChange} defaultValue={defaultValue}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={dataList[0]?.label} defaultValue={defaultValue} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {dataList.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
