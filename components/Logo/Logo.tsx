import Link from "next/link";
import Image from "next/image";

export default function Logo({ size }: { size: number }) {
  return (
    <Link href="/">
      <Image
        src="/upb.png"
        alt="Logo Politehnica"
        width={size}
        height={size}
      ></Image>
    </Link>
  );
}
