import Stats from "@/components/Stats";
import ExploreArea from "@/components/ExploreArea";
import Charts from "@/components/Charts";
import BottomStats from "@/components/BottomStats";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex-1 mt-24 lg:mt-0 xl:px-6 px-0  border border-r-[1px] border-white/10 overflow-y-auto">
      <Header />
      <div className="md:p-6 px-5 py-6 flex flex-col gap-6">
        <Navbar />
        <Stats />
        <ExploreArea />
        <Charts />
        <BottomStats />
      </div>
    </main>
  );
}
