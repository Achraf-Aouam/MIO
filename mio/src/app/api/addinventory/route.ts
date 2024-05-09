import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const res = await request.json();

  const { name, description, price, quantity } = res;

  const result1 = await db.inventory.create({
    data: {
      product: {
        create: {
          name: name,
          description: description,
        },
      },
      price: price,
      quantity: quantity,
    },
  });

  return NextResponse.json({ data: result1 });
}
