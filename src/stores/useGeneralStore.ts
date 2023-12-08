import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface GeneralState {
  isLoginOpen: boolean;
  isEditProfileOpen: boolean;
}
export interface GeneralActions {
  setLoginIsOpen: (isLoginOpen: boolean) => void;
  setIsEditProfileOpen: () => void;
}

const useGeneralStore = create<GeneralState & GeneralActions>()(
  devtools((set) => ({
    isLoginOpen: false,
    isEditProfileOpen: false,
    setLoginIsOpen: (isLoginOpen: boolean) => {
      set({ isLoginOpen });
    },
    setIsEditProfileOpen: () => {
      return set((state) => ({
        isEditProfileOpen: !state.isEditProfileOpen,
      }));
    },
  })),
);

export default useGeneralStore;
