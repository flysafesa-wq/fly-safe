import { Plane } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function NotFound() {
  const { language, toggleLanguage } = useLanguage();

  const copy = {
    ar: {
      code: "٤٠٤",
      title: "الصفحة غير موجودة",
      desc: "عذراً، الصفحة التي تبحث عنها غير متوفرة.",
      home: "العودة إلى الرئيسية",
    },
    en: {
      code: "404",
      title: "Page Not Found",
      desc: "Sorry, the page you are looking for does not exist.",
      home: "Back to Home",
    },
  }[language];

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-background gap-6 p-8"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="bg-primary text-primary-foreground p-4 rounded-2xl">
        <Plane className="w-10 h-10" />
      </div>
      <p className="text-7xl font-bold text-primary">{copy.code}</p>
      <h1 className="text-2xl font-bold text-foreground">{copy.title}</h1>
      <p className="text-muted-foreground text-center max-w-sm">{copy.desc}</p>
      <div className="flex gap-4">
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
        >
          {copy.home}
        </a>
        <button
          onClick={toggleLanguage}
          className="px-4 py-3 rounded-xl border border-border text-muted-foreground hover:text-foreground transition-colors"
        >
          {language === "ar" ? "English" : "العربية"}
        </button>
      </div>
    </div>
  );
}
