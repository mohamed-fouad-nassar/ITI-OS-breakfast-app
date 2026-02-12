import { Outlet } from "react-router";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const navigationData = [
  { title: "Home", href: "/" },
  { title: "Menu", href: "/menu" },
  { title: "Cart", href: "/cart" },
  { title: "Profile", href: "/profile" },
  { title: "Dashboard", href: "/dashboard" },
];

export default function MainLayout() {
  return (
    <>
      <Header navigationData={navigationData} />
      <main className="min-h-[calc(100vh-260px)]">
        <div className="py-10 px-5 container mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer navigationData={navigationData} />
    </>
  );
}
