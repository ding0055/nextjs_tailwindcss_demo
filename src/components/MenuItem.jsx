import Link from "next/link";

export default function MenuItem({ title, address }) {
  return (
    <Link
      href={address}
      className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2"
    >
      <p className="uppercase">{title}</p>
    </Link>
  );
}
