import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const products = await db.product.findMany(); // Fetch all products
  console.log(products);
  return NextResponse.json({ data: products });
}
