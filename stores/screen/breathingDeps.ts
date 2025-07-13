import { SessionType } from "@/types/SessionType";
import { create } from "zustand";

type BreathingDeps = {
  session: SessionType;
  setSession: (s: SessionType) => void;
};

export const useBreathingDepsStore = create<BreathingDeps>((set) => ({
  session: SessionType.short,
  setSession: (s) => set({ session: s }),
}));
