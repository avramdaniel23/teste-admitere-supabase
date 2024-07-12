import Link from "next/link";
import Image from "next/image";

export default function Logo(props: { size: number, bigSize?: number, isBig?: boolean}) {
    const actualSize = (props.isBig!=undefined && props.isBig) ? props.bigSize : props.size;
    return (
    <Link href="/">
      <Image
          className={"transition-all duration-1000"}
        src="/upb.png"
        alt="Logo Politehnica"
        width={actualSize}
        height={actualSize}
      ></Image>
    </Link>
  );
}
