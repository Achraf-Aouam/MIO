import { create } from "zustand";

interface AddproductModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useAddproductmodal = create<AddproductModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAddproductmodal;
