// Import necessary components

import { db } from '@/lib/db';
import { useRouter } from 'next/router';
import { addProduct } from '@/app/lib/addproduct';
import Clientbutton from "@/components/Buttonforadd";


import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  import CardDash from "@/components/cards/card-dash";

  import {
    Activity,
    ArrowUpRight,
    CircleUser,
    CreditCard,
    DollarSign,
    Package2,
    Menu,
    Home,
    Search,
    Users,
  } from "lucide-react";
import { fetchproducts } from '@/app/lib/fetchproducts';
import { fetchsuppliers } from '@/app/lib/fetchsuppliers';
import { fetchStock } from '@/app/lib/fetchstock';
import { fetchTotalQuantity } from '@/app/lib/fetchtotalquant';



const products = async() =>{
  const {inventory} = await fetchproducts();
  const {suppliers} = await fetchsuppliers();
  const stock = await fetchStock();
  const quant = await fetchTotalQuantity();
  console.log(inventory);
  return (

    <div className="flex min-h-screen w-full flex-col">
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <CardDash
          cardTitle="Total Number of Products"
          carddata={inventory.length.toString()}
          cardsubdata=""
          Icon={DollarSign}
        />
        <CardDash
          cardTitle="Total Number of Suppliers"
          carddata={suppliers.length.toString()}
          cardsubdata=""
          Icon={Users}
        />
        <CardDash
          cardTitle="Sum of Quantities"
          carddata={quant.toString()}
          cardsubdata=""
          Icon={ArrowUpRight}
        />
        <CardDash
          cardTitle="Latest Supplier"
          carddata={suppliers[0].name}
          cardsubdata=""
          Icon={Activity}
        />
      </div>
      {/* cards wrapper */}
      <div className="grid gap-4 md:gap-8">
      <Table>
  <TableCaption>A list of available products.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Product ID</TableHead>
      <TableHead>Product Name</TableHead>
      <TableHead>Product Description</TableHead>
      <TableHead>Product Quantity</TableHead>
      <TableHead>Product Supplier</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {stock.map((item) => (
            <TableRow key={`${item.product_id}-${item.supplier_id}`}>
              <TableCell>{item.product_id}</TableCell>
              <TableCell>{item.product.name}</TableCell>
              <TableCell>{item.product.description}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.supplier.name}</TableCell>
            </TableRow>
          ))}
  </TableBody>
</Table>
<Clientbutton/>


      </div>
    </main>
  </div>
);
}  
export default products

// Define the InventoryCheck functional component
