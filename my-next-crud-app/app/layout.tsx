import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}

        <ToastContainer />
      </body>
    </html>
  );
}
