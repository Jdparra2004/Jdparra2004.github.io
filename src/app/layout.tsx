import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Juan David Parra Cantor — Portafolio Profesional & Científico",
  description:
    "Portafolio profesional e investigativo de Juan David Parra Cantor — Ingeniería Química, Optimización Multiobjetivo, Computación Científica en Python y Transición Energética. Universidad Pontificia Bolivariana.",
  icons: {
    icon: [
      { url: "/assets/img/favicon/favicon.ico" },
      { url: "/assets/img/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/img/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <body className="min-h-screen flex flex-col bg-brand-canvas dark:bg-brand-dark-canvas text-brand-ink dark:text-brand-dark-ink transition-colors duration-200">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
