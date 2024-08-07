import Image from "next/image";

export default function ExploreArea() {
  return (
    <div className="bg-white/5 rounded-3xl xl:p-6 p-3">
      <h2 className="xl:text-2xl md:text-lg text-base font-semibold py-1 px-2 mb-4">
        Explore The Area
      </h2>
      <Image
        src="/assets/worldmap.png"
        alt="World Map"
        width={1500}
        height={192}
      />
    </div>
  );
}
