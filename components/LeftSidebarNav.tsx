"use client";

import { SidebarNav } from "@/data/mockData";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LeftSidebarNav() {
  const pathname = usePathname();

  return (
    <ul className="grid gap-4">
      {SidebarNav.map((item) => (
        <Link key={item.title} href={item.route}>
          <li
            className={`flex items-center lg:text-base text-sm py-3 px-4  border-l-2 hover:border-brand hover:bg-white/10 ${
              pathname === item.route
                ? " border-brand bg-white/10 "
                : "border-transparent"
            }`}
          >
            <span style={{ fontSize: 20 }}>
              <item.icon />
            </span>
            <span className="ml-4 lg:mr-4 mr-2">{item.title}</span>
            {item.isPro && (
              <span className="bg-brand text-sm text-black uppercase px-1 rounded-full">
                Pro
              </span>
            )}
          </li>
        </Link>
      ))}
    </ul>
  );
}
