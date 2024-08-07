import { bottomStatsOne, bottomStatsTwo } from "@/data/mockData";
import React from "react";
import BottomStatItem from "./BottomStatItem";

export default function BottomStats() {
  const newStatsOne = bottomStatsOne.slice(1);
  const newStatsTwo = bottomStatsTwo.slice(1);
  return (
    <>
      {/* Desktop */}
      <div className=" grid-cols-4 gap-4 xl:grid hidden ">
        {bottomStatsOne.map((item, index) => (
          <BottomStatItem
            key={index}
            item={item}
            className="first:bg-brand first:text-background"
          />
        ))}
      </div>

      {/* Mobile */}
      <div className="xl:hidden flex ">
        {bottomStatsOne.slice(0, 1).map((item, index) => {
          return (
            <BottomStatItem
              key={index}
              item={item}
              className="flex-1 first:bg-brand first:text-background"
            />
          );
        })}
      </div>
      <div className="xl:hidden flex gap-4">
        {newStatsOne.map((item, index) => {
          return <BottomStatItem key={index} item={item} className="flex-1" />;
        })}
      </div>

      {/* Desktop */}
      <div className=" grid-cols-4 gap-4 xl:grid hidden ">
        {bottomStatsTwo.map((item, index) => (
          <BottomStatItem
            key={index}
            item={item}
            className="first:bg-brand first:text-background"
          />
        ))}
      </div>

      {/* Mobile */}
      <div className="xl:hidden flex">
        {bottomStatsTwo.slice(0, 1).map((item, index) => {
          return (
            <BottomStatItem
              key={index}
              item={item}
              className="flex-1 first:bg-brand first:text-background"
            />
          );
        })}
      </div>

      <div className="xl:hidden flex gap-6">
        {newStatsTwo.map((item, index) => {
          return <BottomStatItem key={index} item={item} className="flex-1" />;
        })}
      </div>
    </>
  );
}
