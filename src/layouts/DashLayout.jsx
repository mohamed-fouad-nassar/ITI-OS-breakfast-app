import { Outlet } from "react-router";

import DashSidebar from "../components/DashSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashLayout() {
  return (
    <SidebarProvider defaultOpen={false}>
      <div>
        <DashSidebar />
        <main>
          <SidebarTrigger className="bg-secondary size-10 fixed top-20 right-4 z-50" />
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
