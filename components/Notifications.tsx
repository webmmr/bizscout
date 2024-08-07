import { notifications } from "@/data/mockData";

export default function Notifications() {
  return (
    <div>
      <h2 className="lg:text-lg text-sm font-semibold py-1 px-2 mb-2">
        Notifications
      </h2>
      <ul>
        {notifications.map((item) => (
          <li
            key={item.subTitle}
            className="flex items-start lg:gap-4 gap-2 p-1 my-2"
          >
            <span className="text-base bg-primaryBlue text-background p-[5px] rounded-3xl lg:mt-1">
              <item.icon />
            </span>
            <div className="flex-1">
              <h3 className="lg:text-base text-sm leading-5">{item.title}</h3>
              <p className=" text-sm text-white/40">{item.subTitle}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
