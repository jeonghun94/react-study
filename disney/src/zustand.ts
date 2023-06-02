import { create } from "zustand";

type State = {
  isLight: Boolean;
  changeTheme: () => void;
};

export const useThemeStore = create<State>((set) => ({
  isLight: false,
  changeTheme: () => set((state) => ({ isLight: !state.isLight })),
}));
