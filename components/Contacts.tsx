import { contacts } from "@/data/mockData";
import Image from "next/image";

export default function Contacts() {
  return (
    <div>
      <h2 className="lg:text-lg text-sm font-semibold py-1 px-2 mb-2">
        Contacts
      </h2>
      <ul>
        {contacts.map((item) => (
          <li
            key={item.name}
            className="flex items-center lg:gap-4 gap-2 p-1 my-2"
          >
            <Image
              src={item.image}
              width={24}
              height={24}
              alt={item.name}
              className="rounded-full"
            />

            <p className="lg:text-base text-sm ">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
