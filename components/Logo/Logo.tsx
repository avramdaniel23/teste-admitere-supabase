import Link from "next/link";
import Image from "next/image";

export default function Logo(props: { size: number, bigSize?: number, isBig?: boolean}) {
    const actualSize = (props.isBig!=undefined && props.isBig) ? props.bigSize : props.size;
    return (
    <Link href="/">
      <Image
          className={"width 0.5s ease-in-out, height 0.5s ease-in-out;"}
        src="/upb.png"
        alt="Logo Politehnica"
        width={actualSize}
        height={actualSize}
      ></Image>
    </Link>
  );
}
