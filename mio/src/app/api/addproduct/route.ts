import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const res = await request.json();
  console.log(res);
  const { nom, description } = res;
  const result = await db.product.create({
    data: {
      name: nom,
      description: description,
    },
  });

  return NextResponse.json({ data: res });
}
