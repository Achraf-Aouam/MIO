"use client";

import React, { useState, useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Modal from "@/components/modal";
import Input from "@/components/Input";
import Button from "@/components/button";
import useModifyproductmodal from "@/hooks/useModifyproduct";

interface ModifyProductModalProps {
  // productId: string;
}

const Modifyproductmodal: React.FC<ModifyProductModalProps> = ({}) => {
  const { onClose, isOpen, productId } = useModifyproductmodal();

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      nom: "",
      description: "",
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
      description="modifier un produit"
      isOpen={isOpen}
      onChange={onChange}
      title="modifier un produit"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <Input
          id="nom"
          disabled={isLoading}
          {...register("nom", { required: true })}
          placeholder={productId}
        />
        <Input
          id="description"
          disabled={isLoading}
          {...register("description", { required: true })}
          placeholder="description du produit"
        />

        <Button disabled={isLoading} type="submit">
          modifier
        </Button>
      </form>
    </Modal>
  );
};
export default Modifyproductmodal;
