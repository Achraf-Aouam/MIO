"use client";

import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import useAddstockmodal from "@/hooks/useAddstock";
import { useRouter } from "next/navigation";

const Inventorybutton = () => {
  const router = useRouter();
  return (
    <Button
      asChild
      size="sm"
      className="ml-auto gap-1 "
      onClick={useAddstockmodal().onOpen}
    >
      <div>
        ajouter
        <CirclePlus className="h-4 w-4" />
      </div>
    </Button>
  );
};

export default Inventorybutton;
