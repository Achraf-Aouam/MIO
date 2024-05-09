import { create } from "zustand";

interface AddxkModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useAddstockmodal = create<AddxkModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAddstockmodal;