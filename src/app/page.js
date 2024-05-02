import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home() {
  const res = await fetch(
    "https://api.pokemontcg.io/v2/cards?q=subtypes:vmax",
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
      <Results results={results} />
    </div>
  );
}
