import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuSquare } from "lucide-react";
import { menus } from "@/lib/menus";

import Link from "next/link";
import ThemeSwitcher from "@/components/theme/theme-switcher";

export default function Navbar() {
  return (
    <nav className="bg-background/80 fixed left-0 top-0 z-10 w-full border-b backdrop-blur">
      <div className="container flex items-center justify-between px-6 py-4 md:px-16">
        {/* brand */}
        <div className="flex items-center gap-3">
          <Link href="/">
            <h1 className="text-xl font-semibold uppercase">Torque</h1>
          </Link>
          <div className="hidden md:block">
            <ThemeSwitcher />
          </div>
        </div>
        {/* menu */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            {menus.map((menu, i) => (
              <NavigationMenuItem key={i}>
                <Link href={menu.link} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} bg-transparent`}
                  >
                    {menu.text}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-row-reverse items-center gap-3 md:hidden">
          {/* mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <MenuSquare />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="uppercase">Torque</SheetTitle>
                <SheetDescription>
                  Unleash the Power, Ride the Torque!
                </SheetDescription>
              </SheetHeader>
              <div className="mt-12 flex flex-col items-center gap-5">
                {menus.map((menu, i) => (
                  <Link href={menu.link} key={i}>
                    {menu.text}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
