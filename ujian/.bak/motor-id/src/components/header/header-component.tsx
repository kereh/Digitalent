// import ThemeSwitcher from "~/components/theme/theme-switcher";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "~/components/ui/sheet";
import { MenuSquare } from "lucide-react";
import { menus } from "~/components/header/menu";
import { getServerAuthSession } from "~/server/auth";
import Link from "next/link";
import HeaderDeskMenu from "~/components/header/header-desk-menu";

export default async function HeaderComponent() {
  const session = await getServerAuthSession();

  return (
    <div className="fixed left-0 top-0 z-10 w-full border-b bg-background/80 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        {/* brand */}
        <div>
          <h1 className="upper text-xl font-semibold">MotorID</h1>
        </div>
        {/* menus */}
        <div>
          <Sheet>
            <SheetTrigger className="md:hidden" asChild>
              <MenuSquare />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
                <SheetDescription>
                  <div className="flex flex-col gap-5">
                    {menus.map((menu, i) => (
                      <Link key={i} href={menu.url}>
                        {menu.text}
                      </Link>
                    ))}
                    {session?.user && (
                      <Link
                        href="/user"
                        className="upper font-semibold text-green-600"
                      >
                        User
                      </Link>
                    )}
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          {/* <ThemeSwitcher/> */}
          <HeaderDeskMenu />
          {session?.user && (
            <Link href="/user" className="upper font-semibold text-green-600">
              User
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
