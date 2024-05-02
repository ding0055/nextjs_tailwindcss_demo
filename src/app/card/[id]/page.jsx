import Image from "next/image";

export default async function Card({ params }) {
  const cardId = params.id;
  const res = await fetch(`https://api.pokemontcg.io/v2/cards/${cardId}`, {
    method: "GET",
    headers: {
      "X-Api-Key": process.env.API_KEY,
    },
  });
  const card = await res.json();
  console.log(card.data);

  return (
    <div className="w-full">
      <div
        className="p-4 md:pt-8 flex flex-col md:flex-row content-center
      max-w-6xl mx-auto md:space-x-6"
      >
        <Image
          src={`${card.data.images.large}`}
          width={500}
          height={300}
          className="sm:rounded-t-lg"
          alt="Pokemon"
        ></Image>
        <div className="p-2">
          <Image
            src={`${card.data.set.images.logo}`}
            width={300}
            height={200}
            alt="Pokemon"
          ></Image>
          <h2 className="text-2xl my-3 font-bold">{card.data.name}</h2>

          <p className="text-xl mb-3">
            <span className="font-semibold mr-1">Types: </span>
            {card.data.types}
          </p>
          <p className="text-xl mb-3">{card.data.flavorText}</p>
        </div>
      </div>
    </div>
  );
}
