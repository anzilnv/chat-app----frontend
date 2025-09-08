import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,
    onlineUsers: [],

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check");
            set({ authUser: res.data });
        } catch (error) {
            console.log("Error in CheckAuth", error);
            set({ authUser: null });
        } finally {
            set({ isCheckingAuth: false })
        }
    },
    signUp: async (data) => {
        set({ isSigningUp: true });
        try {
            const res = await axiosInstance.post("/auth/signUp", data);
            set({ authUser: res.data });
            toast.success("Account Created Successfully");
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            set({ isSigningUp: false });
        }
    },

    login: async (data) => {
        try {
            set({ isLoggingIn: true });
            const res = await axiosInstance.post("/auth/login", data)
            set({ authUser: res.data })
            toast.success("logged in succesfully");
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            set({ isLoggingIn: false });
        }

    },
    Logout: async () => {
        try {
            await axiosInstance.post("/auth/logout");
            set({ authUser: null });
            toast.success("logged out Successfully")
        } catch (error) {
            toast.error(error.response.data.message)
        }
    },
    UpdateProfile: async (data) => {
        set({ isUpdatingProfile: true });
        try {
            const res = await axiosInstance.put("/auth/update-profile", data)
            set({ authUser: res.data })
            if (!file.type.startsWith("image/")) {
                toast.error("Only image files are allowed");
                return;
            }
            if (file.size > 5 * 1024 * 1024) {
                toast.error("Max file size is 5MB");
                return;
            }
            toast.success("Profile Updated Successfully");
        } catch (error) {
            console.log("error in updating profile", error)
            toast.error(error.response.data.message)
        } finally {
            set({ isUpdatingProfile: false });
        }
    }

}))