"use client";
import { useState } from "react";
import Logo from "./Logo";

import { Button } from "./ui/button";
import { FaBars, FaXmark } from "react-icons/fa6";
import Image from "next/image";
import LeftSidebarNav from "./LeftSidebarNav";
import Notifications from "./Notifications";
import Contacts from "./Contacts";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-background fixed w-full z-20 top-0 start-0 pt-6 px-2 lg:hidden block">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Button
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            className="focus:bg-transparent focus:text-white"
          >
            {!isOpen && <FaBars className="w-6 h-6" />}
            {isOpen && <FaXmark className="w-6 h-6" />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="px-4 flex flex-col gap-6 max-h-[80vh] overflow-y-auto">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/avatar.png"
              alt="My Profile"
              width={24}
              height={24}
              className="rounded-full"
            />
            <h6 className="lg:text-base text-sm leading-5">My Profile</h6>
          </div>
          <div>
            <h4 className="text-white/80 lg:text-base text-sm leading-5 lg:mb-4 mb-2 py-1">
              Welcome Back
            </h4>
            <LeftSidebarNav />
          </div>
          <Notifications />
          <Contacts />
        </div>
      )}
    </nav>
  );
}
