import Card from "./Card";

export default function Results({ results, params }) {
  const postPerPage = 10;
  let bakPosts = [];
  if (Object.keys(params).length === 0) {
    const start = 0;
    const end = 10;
    bakPosts = results.slice(start, end);
  } else {
    const start = postPerPage * (parseInt(params["page"]) - 1);
    const end = start + postPerPage;
    bakPosts = results.slice(start, end);
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 max-w-6xl mx-auto py-4">
      {bakPosts.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
