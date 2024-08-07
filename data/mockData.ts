import { AiOutlinePieChart } from "react-icons/ai";
import { PiBugBeetle } from "react-icons/pi";

type SidebarNavType = {
  icon: React.ComponentType;
  title: string;
  isPro: boolean;
  route: string;
};

export const SidebarNav: SidebarNavType[] = [
  {
    icon: AiOutlinePieChart,
    title: "Home",
    isPro: true,
    route: "/",
  },

  {
    icon: AiOutlinePieChart,
    title: "Home",
    isPro: false,
    route: "/home",
  },

  {
    icon: AiOutlinePieChart,
    title: "Marketplace",
    isPro: false,
    route: "/marketplace",
  },
];

type mainNavType = {
  title: string;
  isActive: boolean;
};

export const mainNav: mainNavType[] = [
  { title: "Overview", isActive: true },
  { title: "Section 1", isActive: false },
  { title: "Section 2", isActive: false },
  { title: "Section 3", isActive: false },
];

type notificationType = {
  icon: React.ComponentType;
  title: string;
  subTitle: string;
};

export const notifications: notificationType[] = [
  {
    icon: PiBugBeetle,
    title: "Codie joined BizScout",
    subTitle: "59 minutes ago",
  },
  {
    icon: PiBugBeetle,
    title: "New New York City Listings",
    subTitle: "12 hours ago",
  },
  {
    icon: PiBugBeetle,
    title: "Codie joined BizScout",
    subTitle: "Today, 11:59 AM",
  },
];

type contactType = {
  image: string;
  name: string;
};

export const contacts: contactType[] = [
  {
    image: "/assets/natalie.png",
    name: "Natali Craig",
  },

  {
    image: "/assets/drew.png",
    name: "Drew Cano",
  },

  {
    image: "/assets/orlando.png",
    name: "Orlando Diggs",
  },

  {
    image: "/assets/andi.png",
    name: "Andi Lane",
  },

  {
    image: "/assets/kate.png",
    name: "Kate Morrison",
  },
  {
    image: "/assets/koray.png",
    name: "Koray Okumus",
  },
];

export type topStatsType = {
  title: string;
  value: string;
  subtitle?: string;
};

export const topStats: topStatsType[] = [
  {
    title: "Zip Code",
    value: "90266",
    subtitle: "California",
  },
  {
    title: "Population",
    value: "132,219",
  },
  {
    title: "Media Income",
    value: "$79,005",
  },
];

export type bottomStatsType = {
  title: string;
  value: string;
  percentageValue: number;
};
export const bottomStatsOne: bottomStatsType[] = [
  {
    title: "Medium Rent",
    value: "$3,781",
    percentageValue: 11.01,
  },
  {
    title: "College Grand Rate",
    value: "42%",
    percentageValue: -0.03,
  },
  {
    title: "Stat 5",
    value: "$695",
    percentageValue: 15.03,
  },
  {
    title: "Stat 6",
    value: "30.1%",
    percentageValue: 6.08,
  },
];
export const bottomStatsTwo: bottomStatsType[] = [
  {
    title: "Military Density",
    value: "13%",
    percentageValue: 11.01,
  },
  {
    title: "Average Income",
    value: "1,219",
    percentageValue: -0.03,
  },
  {
    title: "Stat 7",
    value: "$695",
    percentageValue: 15.03,
  },
  {
    title: "Stat 8",
    value: "30.1%",
    percentageValue: 6.08,
  },
];

export type incomeByAgeType = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
};

export const incomeByAge: incomeByAgeType[] = [
  {
    name: "<20",
    uv: 90,
    pv: 130,
    amt: 1500,
  },
  {
    name: "20s",
    uv: 110,
    pv: 120,
    amt: 1500,
  },
  {
    name: "30s",
    uv: 95,
    pv: 125,
    amt: 1500,
  },
  {
    name: "40s",
    uv: 115,
    pv: 135,
    amt: 1500,
  },
  {
    name: "50s",
    uv: 85,
    pv: 125,
    amt: 1500,
  },
  {
    name: "60+",
    uv: 105,
    pv: 150,
    amt: 1500,
  },
];

export type rentByAgeType = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
};

export const rentByAge: rentByAgeType[] = [
  {
    name: "<20",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "20s",
    uv: 3000,
    pv: 2398,
    amt: 2210,
  },
  {
    name: "30s",
    uv: 2000,
    pv: 5800,
    amt: 2290,
  },
  {
    name: "40s",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "50s",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "60+",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];
