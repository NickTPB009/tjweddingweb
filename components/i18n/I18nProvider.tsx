"use client";

import React, { useEffect, useMemo, useState } from "react";
import { I18nContext } from "./useI18n";
import type { Lang } from "./translations";
import { translate } from "./translations";
import LanguageModal from "./LanguageModal";

const STORAGE_KEY = "tj_lang";

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<Lang>("en");
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    // 1) 默认选中上次语言
    const last = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (last === "sv" || last === "en" || last === "pt-BR") {
      setLang(last);
    }

    // 2) 每次刷新强制弹出
    setModalOpen(true);
  }, []);

  useEffect(() => {
    // 记住语言
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      modalOpen,
      setModalOpen,
      t: (key: string) => translate(lang, key),
    }),
    [lang, modalOpen],
  );

  return (
    <I18nContext.Provider value={value}>
      {children}
      {/* 强制弹窗 */}
      <LanguageModal />
    </I18nContext.Provider>
  );
}
