import {db} from "@/lib/db"

export const fetchproducts = async () => {
    try {
        const inventory = await db.product.findMany();

        return { inventory};

    }catch (err){
        console.log(err);
        throw new Error("deez nuts");
    }
};