import {db} from "@/lib/db"
export const fetchStock = async () => {
    try {
        const stockItems = await db.stock.findMany({
            include: {
                product: true,  // Includes product details
                supplier: true  // Includes supplier details
            }
        });

        return stockItems;
    } catch (err) {
        console.error(err);
        throw new Error("Failed to fetch stock items.");
    }
};
