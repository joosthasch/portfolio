import "../styles/globals.css";

export const metadata = {
  title: 'Joost Haschen',
  icons: '/favicon.png', // this sets the favicon
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth`}>
      <body className="bg-white dark:bg-black">
        {children}
      </body>
    </html>
  );
}