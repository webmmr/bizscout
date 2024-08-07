import Image from "next/image";
import Logo from "./Logo";

import LeftSidebarNav from "./LeftSidebarNav";

export default function LeftSidebar() {
  return (
    <aside className="xl:w-[320px] w-[253px] max-h-screen xl:p-10 lg:p-6 lg:flex hidden flex-col gap-9">
      <Logo />
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
    </aside>
  );
}
