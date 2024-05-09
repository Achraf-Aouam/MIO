import { create } from "zustand";

interface ModifyproductModalStore {
  isOpen: boolean;
  onProp: (productId: string) => void;
  productId: string;
  onOpen: () => void;
  onClose: () => void;
}

const useModifyproductmodal = create<ModifyproductModalStore>((set) => ({
  isOpen: false,
  productId: "gotnone1",
  onProp: (productId) => set({ productId: productId }),
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useModifyproductmodal;
