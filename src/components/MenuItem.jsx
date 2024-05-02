import Link from "next/link";

export default function MenuItem({ title, address }) {
  return (
    <Link href={address}>
      <p className="uppercase hidden sm:inline">{title}</p>
    </Link>
  );
}
