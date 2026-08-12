import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PARVOZ — поиск авиабилетов",
  description: "Поиск и покупка авиабилетов из Душанбе.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
