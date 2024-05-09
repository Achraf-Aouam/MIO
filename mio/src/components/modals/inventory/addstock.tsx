"use client";

import useAddstockmodal from "@/hooks/addproducthook";
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
import Button from "@/components/Button";

// import { addProduct } from "@/app/lib/actions";

const FormSchema = z.object({
  product_id: z.string({
    required_error: "Product ID is required."
  }),
  supplier_id: z.string({
    required_error: "Supplier ID is required."
  }),
  quantity: z.number({
    required_error: "Quantity is required."
  }).min(1, "Quantity must be at least 1."),
  price: z.number({
    required_error: "Price is required."
  }).positive("Price must be a positive number."),
});
const Addproductmodal = () => {
  const { onClose, isOpen } = useAddstockmodal();
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
    setIsLoading(true);
    try {
      const response = await fetch("/api/inventory/addstock", {  
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          quantity: parseInt(data.quantity, 10),  // Ensure quantity is an integer
          price: parseFloat(data.price.toFixed(2))  // Ensure price is a float with two decimal places
      }),
      });
      console.log(data);

      if (response.ok) {
        onClose();
        router.refresh();
      } else {
        throw new Error('Failed to add stock');
      }
    } catch (error) {
      console.error("Error adding stock:", error);
    }
    setIsLoading(false);
  };

  return (
    <Modal
      description="Ajouter un stock ici"
      isOpen={isOpen}
      onChange={onChange}
      title="Ajouter un stock"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
          {/** Add fields for product_id, supplier_id, quantity, price here **/}
          <FormField control={form.control} name="product_id" render={({ field }) => (
            <FormItem>
              <FormLabel>Product ID</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}/>
          <FormField control={form.control} name="supplier_id" render={({ field }) => (
            <FormItem>
              <FormLabel>Supplier ID</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}/>
          <FormField control={form.control} name="quantity" render={({ field }) => (
            <FormItem>
              <FormLabel>Quantity</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}/>
          <FormField control={form.control} name="price" render={({ field }) => (
            <FormItem>
              <FormLabel>Price per unit</FormLabel>
              <FormControl>
                <Input type="number" step="0.01" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}/>
          <Button disabled={isLoading} type="submit">
            Ajouter
          </Button>
        </form>
      </Form>
    </Modal>
  );
};

export default Addproductmodal;
