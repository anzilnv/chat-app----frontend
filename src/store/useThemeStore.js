import { create } from "zustand";

export const useThemStore = create((set) => ({
    theme: localStorage.getItem("chat-theme") || "light",
    setTheme: (theme) => {
        localStorage.setTheme("chat-theme", theme);
        set({ theme });
    }
}))