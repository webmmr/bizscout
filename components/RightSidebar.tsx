import Contacts from "./Contacts";
import Notifications from "./Notifications";

export default function RightSidebar() {
  return (
    <aside className="xl:w-[320px] w-[253px] xl:py-12 xl:px-6 lg:p-6 h-screen lg:flex hidden flex-col gap-6">
      <Notifications />
      <Contacts />
    </aside>
  );
}
