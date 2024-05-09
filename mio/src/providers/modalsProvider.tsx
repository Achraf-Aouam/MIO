"use client";

import EditModal from "@/components/editModal";
import Addproductmodal from "@/components/modals/product/add";
import Modifyproductmodal from "@/components/modals/product/modify";
import Addstockmodal from "@/components/modals/stock/add";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <EditModal />
      <Addproductmodal />
      <Modifyproductmodal />
      <Addstockmodal />
    </>
  );
};

export default ModalProvider;
