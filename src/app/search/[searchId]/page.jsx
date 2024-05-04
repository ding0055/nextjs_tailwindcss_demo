import Results from "@/components/Results";
import Pagination from "@/components/Pagination";

export default async function searchPage({ params, searchParams }) {
  console.log(searchParams);
  const searchId = params.searchId;
  const res = await fetch(
    `https://api.pokemontcg.io/v2/cards?q=name:${searchId}`,
    {
      method: "GET",
      headers: {
        "X-Api-Key": process.env.API_KEY,
      },
    }
  );
  const poke = await res.json();
  const results = poke.data;
  console.log(results);
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
      {results && (
        <div>
          <Results results={results} params={searchParams} />
          <Pagination results={results} />
        </div>
      )}
    </div>
  );
}
