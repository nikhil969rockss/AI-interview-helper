import { toast } from "react-toastify";
import { create } from "zustand";
import { getMe, login, logout, register } from "../auth/services/auth.api";

export const useAuthStore = create((set, get) => ({
  user: null,
  loading: false,
  isCheckingAuth: true,

  setUser: (user) => {
    set({ user });
  },

  setLoading: (loading) => {
    set({ loading });
  },

  handleLogin: async ({ email, password }) => {
    get().setLoading(true);
    try {
      const data = await login({ email, password });
      if (data?.user) get().setUser(data.user);
      toast.success("User login successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Error logging user");
    } finally {
      get().setLoading(false);
    }
  },

  handleRegister: async ({ username, email, password }) => {
    get().setLoading(true);
    try {
      const data = await register({ username, email, password });
      if (data?.user) get().setUser(data.user);
      toast.success("User registered successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Error registering user");
    } finally {
      get().setLoading(false);
    }
  },

  handleLogout: async () => {
    get().setLoading(true);
    try {
      await logout();
      get().setUser(null);
    } catch (error) {
      console.log(error);
    } finally {
      get().setLoading(false);
    }
  },

  checkAuthUser: async () => {
    set({ isCheckingAuth: true });
    try {
      const result = await getMe();
      get().setUser(result?.user || null);
    } catch (error) {
      console.log("error checking auth user", error);
    } finally {
      set({ isCheckingAuth: false });
    }
  },
}));
