import {db} from "@/lib/db"

interface ProductData {
    name: string;
    description: string;
}
export const addProduct = async (productData: ProductData) => {
    try {
      const product = await db.product.create({
        data: productData
      });
      return product;
    } catch (error) {
      console.error("Failed to add product:", error);
      throw error;
    }
  };
  