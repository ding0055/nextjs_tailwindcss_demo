import Pagination from "@/components/Pagination";
import Results from "@/components/Results";
import Scroll from "@/components/scroll";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const res = await fetch(
    "https://api.pokemontcg.io/v2/cards?q=subtypes:vmax&pageSize=15",
    {
      method: "GET",
      headers: {
        "X-Api-Key": API_KEY,
      },
    }
  );
  const jdata = await res.json();
  const results = jdata.data;

  return (
    <div>
      <Scroll />
      <Results results={results} params={searchParams} />
      <Pagination results={results} />
    </div>
  );
}
