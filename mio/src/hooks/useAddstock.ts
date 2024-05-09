import { create } from "zustand";

interface AddstockModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useAddstockmodal = create<AddstockModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAddstockmodal;
