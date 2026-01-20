import BootstrapClient from "@/app/components/utils/BootstrapClient";
import "@fortawesome/fontawesome-free/css/all.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CartSummaryProvider from "./contexts/CartSummaryProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartSummaryProvider>
          <Header/>
          {children}
          <Footer/>
          <BootstrapClient/>
        </CartSummaryProvider>
      </body>
    </html>
  );
}
