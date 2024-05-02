import Link from "next/link";

export default function MenuItem({ title, address }) {
  return (
    <Link href={address}>
      <p class="uppercase hidden sm:inline">{title}</p>
    </Link>
  );
}
