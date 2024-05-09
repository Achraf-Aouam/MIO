"use client";
import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useRouter } from "next/navigation";

interface deletebuttProps {
  id: string;
}

const Deletebutt: FC<deletebuttProps> = ({ id }) => {
  const router = useRouter();

  const onSubmit = async (id: string) => {
    try {
      fetch("/api/deleteinventory", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(id),
      }).then((res) => {
        console.log(res);
      });
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button variant="destructive" onClick={() => onSubmit(id)}>
      Delete
    </Button>
  );
};

export default Deletebutt;
