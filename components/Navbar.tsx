import { mainNav } from "@/data/mockData";
import React from "react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="flex xl:flex-row flex-col xl:gap-4 gap-6 items-bottom justify-between mb-4 ">
      <ul className="flex xl:gap-9 gap-6">
        {mainNav.map((item) => (
          <li
            key={item.title}
            className={`pt-[18px] border-t-2  hover:text-brand hover:border-brand hover:cursor-pointer ${
              item.isActive
                ? "text-brand border-brand"
                : "text-white/80 border-transparent"
            }`}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        <Button
          variant="outline"
          className="border-white/5 p-6 text-base hover:bg-brand hover:border-brand"
        >
          Button
        </Button>
        <Button className="p-6  bg-brand text-base text-background border-brand">
          Button
        </Button>
      </div>
    </div>
  );
}
