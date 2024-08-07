import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/assets/Bizscout.png"
        alt="Biz Scout"
        width={124}
        height={24}
      />
    </Link>
  );
}
