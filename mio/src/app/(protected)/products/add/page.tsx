"use client";
import useAddstockmodal from "@/hooks/useAddstock";
import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Modal from "@/components/modal";
import Input from "@/components/Input";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import Button from "@/components/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { db } from "@/lib/db";
// import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  name: z.string({
    required_error: "selectionner un nom.",
  }),
  description: z.string({
    required_error: "obligatoire.",
  }),
});

const Addstockmodal = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const res = await fetch("api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
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
                <Input placeholder="quantitè" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="">
          Submit
        </Button>
      </form>
    </Form>
  );
};
export default Addstockmodal;
