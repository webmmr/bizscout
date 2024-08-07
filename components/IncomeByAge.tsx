"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { incomeByAge } from "@/data/mockData";

const chartConfig = {
  desktop: {
    label: "",
    color: "",
  },
} satisfies ChartConfig;

export function IncomeByAge() {
  const CustomBar = (props: any) => {
    const { x, y, width, height } = props;

    const radius = 24;
    const topLeftX = x;
    const topLeftY = y + height + radius;
    return (
      <path
        d={`
               M${topLeftX},${topLeftY}
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
      <ResponsiveContainer>
        <BarChart width={1000} height={300} data={incomeByAge}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => `${value}k`} />

          <Bar dataKey="pv" stackId="a" fill="#FFE999" />
          <Bar
            dataKey="uv"
            stackId="a"
            fill="#FFE999"
            opacity="50%"
            shape={CustomBar}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
