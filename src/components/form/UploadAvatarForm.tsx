import React, { ChangeEvent, useState } from "react";
import { Form } from "../ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { CustomInput } from "../form-field/custom/CustomInput";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";

type Props = {
  currentImageUrl: string;
};

const UploadAvatarForm = ({ currentImageUrl }: Props) => {
  const [preview, setPreview] = useState(currentImageUrl);

  const form = useForm();

  function getImageData(event: ChangeEvent<HTMLInputElement>) {
    // FileList is immutable, so we need to create a new one
    const dataTransfer = new DataTransfer();

    // Add newly uploaded images
    Array.from(event.target.files!).forEach((image) => dataTransfer.items.add(image));

    const files = dataTransfer.files;
    const displayUrl = URL.createObjectURL(event.target.files![0]);

    return { files, displayUrl };
  }

  return (
    <Form {...form}>
      <form className="flex flex-col gap-8">
        <div className="relative mx-auto h-48 w-48">
          <Avatar className="m-auto h-full w-full">
            <AvatarImage src={preview} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <CustomInput
          id="picture"
          type="file"
          label="Change picture"
          onChange={(event) => {
            const { files, displayUrl } = getImageData(event);
            setPreview(displayUrl);
          }}
          className="w-full"
        />
        <div className=" flex">
          <div className="ml-auto flex gap-3">
            <Button type="submit" variant="destructive">
              Cancel changes
            </Button>
            <Button type="submit">Save changes</Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default UploadAvatarForm;
