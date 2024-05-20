import { create } from 'zustand';

type SessionState = {
  session: any;
  setSession: (session: any) => void;
};

export const useSessionStore = create<SessionState>((set) => ({
  session: null,
  setSession: (session) => set({ session }),
}));
