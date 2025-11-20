import "../styles/globals.css";

export const metadata = {
  title: 'Van Gogh Portfolio',
  description: 'My React/Next.js portfolio',
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