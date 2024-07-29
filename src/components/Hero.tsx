import WordPullUp from "./ui/WordPullUp";

export function Hero() {
  return (
    <div>
      <div className="flex flex-col items-center w-[50vh] m-auto mt-40 mb-10">
        <h1 className="text-2xl font-bold"> Welcome to NxS Esports! </h1>
      </div>
      <WordPullUp words={"Where Legends Battle and Heroes Emerge"}></WordPullUp>
      <p className="text-center w-[50vh] m-auto">
        Dive into the thrilling world of BGMI (Battlegrounds Mobile India)
        tournaments with NxS Esports. We bring together the best gamers from
        around the globe to compete, showcase their skills, and rise to the top.
        Whether you're a seasoned pro or a passionate newcomer, our platform
        offers the ultimate competitive experience. Join us to participate in
        exhilarating tournaments, win exciting prizes, and become a part of our
        ever-growing community of esports enthusiasts.
      </p>
    </div>
  );
}
