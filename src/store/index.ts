'use client';
import { IEmailTemplate } from '@/app/interfaces/emailTemplates';
import { create } from 'zustand';

type SessionState = {
  session: any;
  setSession: (session: any) => void;
};
export const useSessionStore = create<SessionState>((set) => ({
  session: null,
  setSession: (session) => set({ session }),
}));

type State = {
  emailTemplates: IEmailTemplate[];
  updateTemplates: (emailTemplates: IEmailTemplate[]) => void;
};
export const useEmailTemplatesStore = create<State>((set) => ({
  emailTemplates: [],
  updateTemplates: (emailTemplates: IEmailTemplate[]) =>
    set({ emailTemplates }),
}));
