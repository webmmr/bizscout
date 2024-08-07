import React from "react";
import { IncomeByAge } from "./IncomeByAge";
import { RentByAge } from "./RentByAge";

export default function Charts() {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-6">
      <div className="bg-white/5 rounded-3xl xl:p-6 p-3">
        <h2 className="xl:text-2xl md:text-lg text-base font-semibold py-1 px-2 lg:mb-6 mb-4">
          Average Income By Age
        </h2>
        <IncomeByAge />
      </div>
      <div className="bg-white/5 rounded-3xl xl:p-6 p-3">
        <h2 className="xl:text-2xl md:text-lg text-base font-semibold py-1 px-2 lg:mb-6 mb-4">
          Median Rent By Age
        </h2>
        <RentByAge />
      </div>
    </div>
  );
}
