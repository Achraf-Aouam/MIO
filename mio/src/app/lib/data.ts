import { db } from "@/lib/db";

export const countProducts = async () => {
  try {
    const count = await db.product.count();

    return { count };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to count products!");
  }
};

export const fetchproducts = async () => {
  try {
    const products = await db.product.findMany();
    return products;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

// fetch all inventory
export const fetchInventory = async () => {
  try {
    const inventory = await db.inventory.findMany({
      include: {
        product: true,
      },
    });
    return inventory;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch inventory!");
  }
};

// export consr fetchstock = async () => {
//   try {
//     const stock = await db.stock.findMany();
//     return stock;
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to fetch stock!");
//   }
// }
