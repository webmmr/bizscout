import { topStats } from "@/data/mockData";

import StatItem from "./StatItem";

export default function Stats() {
  return (
    <section className="grid grid-cols-3 gap-6">
      {topStats.map((item, index) => (
        <StatItem key={index} item={item} />
      ))}
    </section>
  );
}
