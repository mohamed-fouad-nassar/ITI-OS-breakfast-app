import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router";

import Logo from "./Logo";

export default function Header({ navigationData }) {
  let { pathname } = useLocation();

  return (
    <header className="bg-background sticky top-0 z-50 h-17.5">
      <div className="mx-auto flex h-full container items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        <NavigationMenu className="max-md:hidden">
          <NavigationMenuList className="flex-wrap justify-start gap-5 lg:gap-12">
            {navigationData.map(({ title, href }) => (
              <NavigationMenuItem key={title}>
                <Link
                  to={href}
                  className={`hover:text-primary text-base! font-medium hover:bg-transparent ${
                    pathname === href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {title}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="via-primary/20 mx-auto h-px w-4/5 bg-linear-to-r from-transparent to-transparent"></div>
    </header>
  );
}
