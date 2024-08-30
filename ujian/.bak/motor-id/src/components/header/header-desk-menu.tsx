import { menus } from "./menu";
import Link from "next/link";

export default function HeaderDeskMenu() {
  return (
    <div className="flex items-center gap-5">
      {menus.map((menu, i) => (
        <Link key={i} href={menu.url}>
          {menu.text}
        </Link>
      ))}
    </div>
  );
}
