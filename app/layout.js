import { Inter } from "next/font/google";
import "./ui/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sistem Verifikasi Penatausahaan (SIVENA)",
  description: "Aplikasi Penatausahaan BPKAD Kota Palu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
 
      <body className={inter.className}>{children}</body>
    </html>
  );
}
