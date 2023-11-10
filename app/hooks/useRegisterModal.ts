import { create } from "zustand";

interface RegisterModalType {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRegisterModal = create<RegisterModalType>((set) => {
  return {
    isOpen: false,
    onOpen: () =>
      set((state) => {
        return {
          isOpen: true,
        };
      }),
    onClose: () =>
      set((state) => {
        return {
          isOpen: false,
        };
      }),
  };
});

export default useRegisterModal;
