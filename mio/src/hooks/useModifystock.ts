import { create } from "zustand";

interface ModifystocktModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useModifystocktmodal = create<ModifystocktModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useModifystocktmodal;
