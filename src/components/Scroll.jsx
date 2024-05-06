export default function Scroll() {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <ul className="flex text-2xl items-center justify-center [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li>#Pokemon GO!</li>
        <li>#Pokemon GO!</li>
        <li>#Pokemon GO!</li>
        <li>#Pokemon GO!</li>
        <li>#Pokemon GO!</li>
        <li>#Pokemon GO!</li>
        <li>#Pokemon GO!</li>
        <li>#Pokemon GO!</li>
        <li>#Pokemon GO!</li>
      </ul>
      <ul
        className="flex text-2xl items-center justify-center [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        <li>#Pokemon GO!</li>
        <li>#Pokemon GO!</li>
        <li>#Pokemon GO!</li>
        <li>#Pokemon GO!</li>
        <li>#Pokemon GO!</li>
        <li>#Pokemon GO!</li>
        <li>#Pokemon GO!</li>
        <li>#Pokemon GO!</li>
        <li>#Pokemon GO!</li>
      </ul>
    </div>
  );
}
