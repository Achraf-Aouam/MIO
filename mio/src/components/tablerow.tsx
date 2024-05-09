"use client";

import { Children } from "react";
import { TableRow } from "./ui/table";
import { Console } from "console";

import useModifyproductmodal from "@/hooks/useModifyproduct";

interface TableRowProps {
  children: React.ReactNode;
  product: any;
}

//function to handle the click event on the table row
const TableRowinteract: React.FC<TableRowProps> = ({ children, product }) => {
  const modal = useModifyproductmodal();
  function handleclick(product: any) {
    modal.onProp(product.id);
    modal.onOpen();
  }

  return (
    <TableRow key={product.id} onClick={handleclick}>
      {children}
    </TableRow>
  );
};

// const TableRowinteract: React.FC<TableRowProps> = ({ children, product }) => {
//   return (
//     <TableRow key={product.id} onClick={functionhandleRowClick}>
//       {children}
//     </TableRow>
//   );
// };

export default TableRowinteract;
