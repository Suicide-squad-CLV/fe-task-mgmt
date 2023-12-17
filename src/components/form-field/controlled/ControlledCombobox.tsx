"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { Control, useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { optionDataType } from "./ControlledSelect";
import { ScrollArea } from "@/components/ui/scroll-area";

type ControlledCombobox = {
  control: Control<any>;
  name: string;
  label?: string;
  dataList: optionDataType[];
  onSelect: (value: string) => void;
  placeholder?: string;
  defaultValue?: string;
  CustomOptionsItem?: React.ComponentType<any>;
  emptyState?: string;
};

export function ControlledCombobox({
  control,
  name,
  label,
  dataList,
  placeholder,
  onSelect,
  defaultValue,
  CustomOptionsItem,
  emptyState,
}: ControlledCombobox) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex w-full flex-col">
          {label && <FormLabel>{label}</FormLabel>}
          <Popover modal={true}>
            <PopoverTrigger asChild>
              {/* Show on box at form */}
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn("w-full justify-between", !field.value && "text-muted-foreground")}
                >
                  {field.value ? dataList.find((item) => item.value === field.value)?.label : placeholder}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              {/* Dropdown */}
              <Command className="w-full">
                <CommandInput placeholder={placeholder} />
                <CommandEmpty>{`${emptyState ? emptyState : "No option found"}`}</CommandEmpty>
                <CommandGroup>
                  <ScrollArea className="h-52">
                    {dataList.map((item) => (
                      <CommandItem value={item.value} key={item.value} onSelect={() => onSelect(item.value)}>
                        <Check
                          className={cn("mr-2 h-4 w-4", item.value === field.value ? "opacity-100" : "opacity-0")}
                        />
                        {CustomOptionsItem ? (
                          <CustomOptionsItem avtUrl={item.avtUrl} fullname={item.label} email={item.email} />
                        ) : (
                          item.label
                        )}
                      </CommandItem>
                    ))}
                  </ScrollArea>
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
