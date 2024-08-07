"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { incomeByAge, rentByAge } from "@/data/mockData";

const chartConfig = {
  desktop: {
    label: "",
    color: "",
  },
} satisfies ChartConfig;

export function RentByAge() {
  const CustomBar = (props: any) => {
    const { x, y, width, height } = props;

    const radius = 24;
    return (
      <path
        d={`
              M${x},${y + height}
              L${x},${y + radius}
              Q${x},${y} ${x + radius},${y}
              L${x + width - radius},${y}
              Q${x + width},${y} ${x + width},${y + radius}
              L${x + width},${y + height}
              Z
            `}
        fill="#FFE999"
        opacity="50%"
      />
    );
  };

  return (
    <ChartContainer config={chartConfig} className="h-[400px] w-full">
      <BarChart width={1000} height={300} data={rentByAge}>
        <CartesianGrid strokeDasharray="0" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(value) => `$${value}`} />

        <Bar dataKey="pv" stackId="a" fill="#FFE999" />
        <Bar
          dataKey="uv"
          stackId="a"
          fill="#FFE999"
          opacity="50%"
          shape={CustomBar}
        />
      </BarChart>
    </ChartContainer>
  );
}
