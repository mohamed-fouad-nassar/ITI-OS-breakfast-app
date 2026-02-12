import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <main>
      <div className="px-5 container mx-auto h-screen flex justify-center items-center">
        <Outlet />
      </div>
    </main>
  );
}
