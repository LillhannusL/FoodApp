import "./globals.css";
import NavBar from "@/components/shared/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <NavBar />
      </body>
    </html>
  );
}
