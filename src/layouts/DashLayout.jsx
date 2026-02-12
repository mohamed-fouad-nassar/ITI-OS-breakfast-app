import { Outlet } from "react-router";

import DashSidebar from "../components/DashSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashLayout() {
  return (
    <SidebarProvider defaultOpen={false}>
      <div>
        <DashSidebar />
        <main className="py-6">
          <SidebarTrigger className="bg-gray-200 size-10 fixed top-20 right-4 z-50" />
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
