import { topStatsType } from "@/data/mockData";

export default function StatItem({ item }: { item: topStatsType }) {
  return (
    <div className="xl:p-6 p-4 rounded-3xl bg-white/5 flex flex-col xl:gap-4 gap-2">
      <h5 className="xl:text-lg md:text-base text-sm leading-5 font-semibold">
        {item.title}
      </h5>
      <h2 className="xl:text-3xl md:text-2xl text-xl font-semibold">
        {item.value}
      </h2>
      <p className="xl:text-base md:text-sm text-[12px] leading-[18px]">
        {item.subtitle}
      </p>
    </div>
  );
}
