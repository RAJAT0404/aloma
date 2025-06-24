import { ReactNode } from "react";
import Header from "@/components/ui/Header";
import {Footer} from "@/components/ui/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
};

export default Layout;
