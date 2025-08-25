'use client';
import Header from "@/components/Header";
import { CartProvider } from "@/context/CartContext";
import styles from "./globals.css";
import { FiltersProvider } from "@/context/FiltersContext";
import {NavigationProvider} from "@/context/NavigationContext";
import {ThemeProvider} from "@/context/ThemeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
      <ThemeProvider>
      <NavigationProvider>
        <CartProvider>
          <FiltersProvider>
          <Header />
          <main className={styles.main}>{children}</main>
          </FiltersProvider>
        </CartProvider>
      </NavigationProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
