"use client";

import { createContext, useContext } from "react";
import type { Lang } from "./translations";

export type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  t: (key: string) => string;
};

export const I18nContext = createContext<I18nContextValue | null>(null);

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider />");
  return ctx;
}
