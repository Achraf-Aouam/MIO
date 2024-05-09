"use client";

import useAddproductmodal from "@/hooks/useAddproduct";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
//import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Modal from "@/components/modal";
import Input from "@/components/Input";
import Button from "@/components/button";

// import { addProduct } from "@/app/lib/actions";

const FormSchema = z.object({
  nom: z.string({
    required_error: "le nom est obligatoire.",
  }),
  description: z.string({
    required_error: "la description est obligatoire.",
  }),
});

const Addproductmodal = () => {
  const { onClose, isOpen } = useAddproductmodal();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    console.log("here");
    console.log(data);
    try {
      fetch("/api/addproduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log(res);
      });
      router.refresh();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      description="Ajouter un produit ici"
      isOpen={isOpen}
      onChange={onChange}
      title="Ajouter un produit"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-y-4"
        >
          <FormField
            control={form.control}
            name="nom"
            render={({ field }) => (
              <FormItem>
                <FormLabel>nom</FormLabel>
                <FormControl>
                  <Input placeholder="prix unitè" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>description</FormLabel>
                <FormControl>
                  <Input placeholder="prix unitè" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isLoading} type="submit">
            Ajouter
          </Button>
        </form>
      </Form>
    </Modal>
  );
};
export default Addproductmodal;
