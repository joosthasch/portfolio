import "./globals.css";

export const metadata = { /* ... */ };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white dark:bg-black">
        {children}
      </body>
    </html>
  );
}