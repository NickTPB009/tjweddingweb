"use client";

import React, { useEffect, useState } from "react";
import { useI18n } from "./useI18n";
import type { Lang } from "./translations";

export default function LanguageModal() {
  const { lang, setLang, modalOpen, setModalOpen, t } = useI18n();
  const [selected, setSelected] = useState<Lang>(lang);

  useEffect(() => {
    if (modalOpen) setSelected(lang);
  }, [modalOpen, lang]);

  if (!modalOpen) return null;

  return (
    <div style={overlay}>
      <div style={card}>
        <div style={title}>{t("lang.title")}</div>
        <div style={subtitle}>{t("lang.subtitle")}</div>

        <div style={options}>
          <LangOption
            label={t("lang.swedish")}
            value="sv"
            selected={selected}
            onSelect={setSelected}
          />
          <LangOption
            label={t("lang.english")}
            value="en"
            selected={selected}
            onSelect={setSelected}
          />
          <LangOption
            label={t("lang.portuguese")}
            value="pt-BR"
            selected={selected}
            onSelect={setSelected}
          />
        </div>

        <button
          style={btn}
          onClick={() => {
            setLang(selected);
            setModalOpen(false);
          }}
        >
          {t("lang.continue")}
        </button>

        <div style={hint}>Tip: Your selection is remembered.</div>
      </div>
    </div>
  );
}

function LangOption({
  label,
  value,
  selected,
  onSelect,
}: {
  label: string;
  value: Lang;
  selected: Lang;
  onSelect: (l: Lang) => void;
}) {
  const isActive = selected === value;

  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      style={{
        ...optionBtn,
        borderColor: isActive ? "rgba(0,0,0,0.22)" : "rgba(0,0,0,0.10)",
        background: isActive ? "rgba(0,0,0,0.04)" : "white",
      }}
    >
      <span
        style={{
          fontSize: 13,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
      <span
        aria-hidden
        style={{
          width: 10,
          height: 10,
          borderRadius: 999,
          border: "1px solid rgba(0,0,0,0.25)",
          background: isActive ? "rgba(0,0,0,0.35)" : "transparent",
        }}
      />
    </button>
  );
}

/* styles */
const overlay: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.38)",
  display: "grid",
  placeItems: "center",
  zIndex: 9999,
  padding: 18,
};

const card: React.CSSProperties = {
  width: "min(520px, 100%)",
  background: "#f4f2ee",
  borderRadius: 12,
  padding: "22px 18px 18px",
  boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
  textAlign: "center",
};

const title: React.CSSProperties = {
  fontSize: 14,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  marginBottom: 8,
};

const subtitle: React.CSSProperties = {
  fontSize: 13,
  opacity: 0.8,
  marginBottom: 14,
};

const options: React.CSSProperties = {
  display: "grid",
  gap: 10,
  marginBottom: 14,
};

const optionBtn: React.CSSProperties = {
  width: "100%",
  padding: "12px 12px",
  borderRadius: 10,
  border: "1px solid rgba(0,0,0,0.10)",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const btn: React.CSSProperties = {
  marginTop: 6,
  padding: "12px 22px",
  borderRadius: 999,
  border: "none",
  background: "#8a826f",
  color: "white",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  fontSize: 12,
  cursor: "pointer",
};

const hint: React.CSSProperties = {
  marginTop: 12,
  fontSize: 12,
  opacity: 0.6,
};
