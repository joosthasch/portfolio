import "../styles/globals.css";
import { Archivo } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo" });

export const metadata = { /* ... */ };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${archivo.variable}`}>
      <body className="bg-white dark:bg-black">
        {children}
      </body>
    </html>
  );
}