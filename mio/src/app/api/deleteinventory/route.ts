import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(request: any) {
  const res = await request.json();
  console.log(res);

  const result = await db.inventory.delete({
    where: {
      id: res,
    },
  });

  return NextResponse.json({ data: result });
}
