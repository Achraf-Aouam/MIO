import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const requestBody = await request.json();
  console.log(requestBody);

  const { nom, description, supplier_id, quantity, price } = requestBody;

  try {
    // Step 1: Create or find product
    let product = await db.product.create({
        data: {
          name: nom,
          description: description,
        },
      });
    

    // Step 2: Create stock entry
    if (typeof quantity !== 'number' || typeof price !== 'number' || !supplier_id) {
      return NextResponse.json({ error: "Missing or invalid stock information" }, { status: 400 });
    }

    const stockEntry = await db.stock.create({
      data: {
        product_id: product.id,  // Ensures this is the ID from the product created or found
        supplier_id: supplier_id,
        quantity: quantity,
        price: price
      },
    });

    // Return both product and stock information in the response for confirmation
    return NextResponse.json({ product: product, stock: stockEntry });
  } catch (error) {
    console.error("Failed to process request:", error);
    return NextResponse.json({ error: "error" }, { status: 500 });
  }
}
