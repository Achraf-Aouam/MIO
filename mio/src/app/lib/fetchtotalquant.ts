import {db} from "@/lib/db"
export const fetchTotalQuantity = async (): Promise<number> => {
    try {
        const stockItems = await db.stock.findMany();
        return stockItems.reduce((acc, item) => acc + item.quantity, 0);
    } catch (err) {
        console.error(err);
        throw new Error("Failed to fetch stock items.");
    }
}