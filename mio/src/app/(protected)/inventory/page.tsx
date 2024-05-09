// "use client";

import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  CirclePlus,
  CircleUser,
  CreditCard,
  DollarSign,
  PackageOpen,
} from "lucide-react";
import TableRowinteract from "@/components/tablerow";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import NavHeader from "@/components/Navbar/NavHeader";
import CardDash from "@/components/cards/card-dash";
import Dashtable from "@/components/tables/dash-table";
import Cardelements from "@/components/cards/elements-card";
import { useEffect, useState } from "react";
// import { countProducts } from "@/app/api/db/route";
import { CircularProgress } from "@mui/material";
import { db } from "@/lib/db";
import { fetchproducts, countProducts, fetchInventory } from "@/app/lib/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import useAddproductmodal from "@/hooks/useAddproduct";
import Clientbutton from "@/components/clientbutton";
import Deletebutt from "@/components/deletebutt";
import Inventorybutton from "@/components/inventorybutton";

const Products = async () => {
  const count = await countProducts();
  const inventory = await fetchInventory();

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 ">
        <CardDash
          cardTitle="nombre de produits"
          carddata={count.count.toString()}
          cardsubdata=""
          Icon={PackageOpen}
        />
      </div>

      <div className="grid gap-4 md:gap-8 ">
        <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-5">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>produits</CardTitle>
              <CardDescription>
                tous les produits enregistrés, appuiyer sur un produit pour
                modifier
              </CardDescription>
            </div>
            <Inventorybutton />
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>nom</TableHead>
                  <TableHead className="text-right">description</TableHead>
                  <TableHead className="text-right">quantité</TableHead>
                  <TableHead className="text-right">actions</TableHead>{" "}
                  {/* New column */}
                </TableRow>
              </TableHeader>
              <TableBody>
                {inventory.map((inventory) => (
                  <TableRow key={inventory.product_id}>
                    <TableCell>
                      <div className="font-medium">
                        {inventory.product.name}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      {inventory.product.description}
                    </TableCell>
                    <TableCell className="text-right">
                      {inventory.quantity}
                    </TableCell>
                    <TableCell className="text-right">
                      {" "}
                      {/* New column */}
                      <Deletebutt id={inventory.id} type="inventory" />
                      {/* <Button variant="destructive">Delete</Button>{" "} */}
                      {/* Red button */}
                    </TableCell>{" "}
                    {/* New column */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        {/*table */}
        {/* <Cardelements /> */}
      </div>
    </main>
  );
};

export default Products;
