import Link from "next/link";
import Image from "next/image";

export default function Card({ result }) {
  return (
    <div
      className="group cursor-pointer m-1 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border-slate-400 sm:m-2
     transition-shadow duration-200"
    >
      <Link href={`/card/${result.id}`}>
        <Image
          src={`${result.images.small}`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
          alt="Pokemon"
        ></Image>
        <div className="flex justify-between items-center p-4 font-bold">
          <p>{result.name}</p>
          <Image
            src={`${result.set.images.symbol}`}
            width={30}
            height={20}
            alt="Pokemon"
          ></Image>
        </div>
      </Link>
    </div>
  );
}
