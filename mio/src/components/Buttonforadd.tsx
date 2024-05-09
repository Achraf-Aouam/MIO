"use client";

import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import useAddproductmodal from "@/hooks/addproducthook";
import { useRouter } from "next/navigation";

const Clientbutton = () => {
  const router = useRouter();
  return (
    <Button
      asChild
      size="sm"
      className="ml-auto gap-1 "
      onClick={useAddproductmodal().onOpen}
    >
      <div>
        ajouter produit
        <CirclePlus className="h-4 w-4" />
      </div>
    </Button>
  );
};

export default Clientbutton;