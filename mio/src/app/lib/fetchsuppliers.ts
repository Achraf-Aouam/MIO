import {db} from "@/lib/db"

export const fetchsuppliers = async () => {
    try {
        const suppliers = await db.supplier.findMany();

        return { suppliers};

    }catch (err){
        console.log(err);
        throw new Error("deez nuts");
    }
};