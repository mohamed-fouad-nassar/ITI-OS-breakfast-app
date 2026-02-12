import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarContent,
} from "@/components/ui/sidebar";
import { Link } from "react-router";
import { Button } from "./ui/button";

const dashLinks = [
  { title: "Home", href: "/" },
  { title: "Dashboard", href: "/dashboard" },
  { title: "Orders", href: "/orders" },
  { title: "New Order", href: "/orders/new" },
];

export default function DashSidebar() {
  return (
    <Sidebar variant="floating" className="top-20 h-fit">
      <SidebarHeader />
      <SidebarContent className="p-5">
        <h2 className="mb-5 font-semibold text-xl text-center">Dashboard</h2>
        <nav className="flex flex-col gap-2.5">
          {dashLinks.map(({ title, href }) => (
            <Button key={href} asChild variant="ghost">
              <Link to={href}>{title}</Link>
            </Button>
          ))}
        </nav>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
