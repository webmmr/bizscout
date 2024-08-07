import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SearchIcon, Slash } from "lucide-react";
import { BsSlashLg } from "react-icons/bs";
import { Input } from "./ui/input";
import { ImCommand } from "react-icons/im";

export default function Header() {
  return (
    <div className="flex lg:flex-row flex-col xl:gap-0 gap-4 items-center justify-between xl:px-12 lg:px-6 px-5 py-5 border-b-[1px] border-white/5">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/" className="text-base">
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <BsSlashLg />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/" className="text-base text-white hover:text-brand">
                Zip Reports
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex w-full md:max-w-sm max-w-xs items-center gap-0 bg-white/5 rounded-lg px-3">
        <SearchIcon className="h-6 w-6 mr-2.5 text-white/50" />
        <Input
          type="search"
          placeholder="Search Zip Code"
          className="w-full border-0 bg-transparent text-base"
        />
        <p className="flex items-center text-white/50 ml-2">
          <ImCommand />
          <p>/</p>
        </p>
      </div>
    </div>
  );
}
