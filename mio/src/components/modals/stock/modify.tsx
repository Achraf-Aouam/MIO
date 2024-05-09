"use client";

import React, { useState, useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Modal from "@/components/modal";
import Input from "@/components/Input";
import Button from "@/components/button";
import useModifystockmodal from "@/hooks/useModifystock";

interface ModifystockModalProps {
  productId: string;
  supplierId: string;
  quantity: number;
  price: number;
}

const Modifystockmodal: React.FC<ModifystockModalProps> = ({
  productId,
  supplierId,
  quantity,
  price,
}) => {
  const { onClose, isOpen } = useModifystockmodal();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      quantitè: quantity,
      prix: price,
    },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    console.log(values);
  };

  return (
    <Modal
      description="modifier un stock"
      isOpen={isOpen}
      onChange={onChange}
      title="modifier un stock
      "
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <Input
          id="quantitè"
          disabled={isLoading}
          {...register("quantitè", { required: true })}
          placeholder="nouvelle quantitè du stock"
        />
        <Input
          id="prix"
          disabled={isLoading}
          {...register("prix", { required: true })}
          placeholder="prix du stock"
        />

        <Button disabled={isLoading} type="submit">
          modifier
        </Button>
      </form>
    </Modal>
  );
};
export default Modifystockmodal;
