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
        className="p-4 md:pt-8 flex flex-col md:flex-row content-center justify-center
      max-w-6xl mx-auto md:space-x-6"
      >
        <div className="flex content-center justify-center">
          <Image
            src={`${card.data.images.large}`}
            className="sm:rounded-t-lg max-w-full h-auto"
            width={300}
            height={200}
            alt="Pokemon"
          ></Image>
        </div>

        <div className="p-2 justify-center">
          <div className="flex justify-center content-center">
            <Image
              src={`${card.data.set.images.logo}`}
              width={300}
              height={200}
              alt="Pokemon"
            ></Image>
          </div>

          <div class="flow-root rounded-lg border border-gray-100 py-3 mt-3 shadow-sm dark:border-gray-200">
            <dl class="-my-3 divide-y divide-gray-100 text-sm dark:divide-gray-200">
              <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt class="font-medium text-gray-900 dark:text-white">ID</dt>
                <dd class="text-gray-700 sm:col-span-2 dark:text-gray-200">
                  {card.data.id}
                </dd>
              </div>

              <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt class="font-medium text-gray-900 dark:text-white">Name</dt>
                <dd class="text-gray-700 sm:col-span-2 dark:text-gray-200">
                  {card.data.name}
                </dd>
              </div>

              <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt class="font-medium text-gray-900 dark:text-white">Types</dt>
                <dd class="text-gray-700 sm:col-span-2 dark:text-gray-200">
                  {card.data.types}
                </dd>
              </div>

              <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt class="font-medium text-gray-900 dark:text-white">
                  Subtypes
                </dt>
                <dd class="text-gray-700 sm:col-span-2 dark:text-gray-200">
                  {card.data.subtypes}
                </dd>
              </div>

              <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt class="font-medium text-gray-900 dark:text-white">Rules</dt>
                <dd class="text-gray-700 sm:col-span-2 dark:text-gray-200">
                  {card.data.rules}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
