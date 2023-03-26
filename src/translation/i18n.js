import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enData from "./languages/En.json";
import arData from "./languages/Ar.json";

const resources = {
  en: {
    translation: enData,
  },
  ar: {
    translation: arData,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
