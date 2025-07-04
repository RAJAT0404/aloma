import { ReactNode } from "react";
import Header from "./ui/Header";
import {Footer } from "./ui/Footer";

interface LayoutProps {
  children: ReactNode;
}

export default async function Layout({children}: LayoutProps) {

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
