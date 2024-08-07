import { bottomStatsType } from "@/data/mockData";
import React from "react";
import { MdOutlineTrendingUp, MdTrendingDown } from "react-icons/md";

export default function BottomStatItem({
  item,
  className,
}: {
  item: bottomStatsType;
  className?: string;
}) {
  return (
    <div
      className={`bg-white/5  text-white  rounded-2xl xl:p-4 p-3 flex flex-col xl:gap-4 gap-2   ${className}`}
    >
      <h4 className="xl:text-lg lg:text-base text-sm leading-5 font-semibold">
        {item.title}
      </h4>
      <h2 className="xl:text-3xl lg:text-2xl font-semibold">{item.value}</h2>
      <p className="flex items-center gap-2">
        <span className="lg:text-base text-[12px]">{`${item.percentageValue}%`}</span>
        {item.percentageValue > 0 ? (
          <MdOutlineTrendingUp />
        ) : (
          <MdTrendingDown className="rotate-[115deg]" />
        )}
      </p>
    </div>
  );
}
