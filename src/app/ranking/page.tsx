import Image from "next/image";
import ShineBorder from "@/components/ui/ShineBorder";
import NumberTicker from "@/components/ui/NumberTicker";

function Ranking() {
  return (
    <div className="flex flex-col md:flex-row gap-10 m-auto mt-10 justify-center items-center">
      <div>
        <ShineBorder
          className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl min-w-60"
          color={["#F35B19"]}
          borderWidth={2}
        >
          <div className="flex gap-16 py-4 mx-4">
            <Image
              width={60}
              height={60}
              src={"https://picsum.photos/200"}
              alt="profile"
              className="rounded-full items-start"
            />

            <div>
              <NumberTicker value={15} className="font-bold text-4xl" />
              <h1 className="text-sm">Kills</h1>
            </div>
          </div>

          <div className="flex gap-6">
            <h1 className="font-bold text-xl">#1</h1>
            <h1 className="font-bold text-lg">Punis Esports</h1>
          </div>
        </ShineBorder>
      </div>
      <div>
        <ShineBorder
          className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl"
          color={["#F35B19"]}
          borderWidth={2}
        >
          <div className="flex gap-16 py-4 mx-4">
            <Image
              width={60}
              height={60}
              src={"https://picsum.photos/200"}
              alt="profile"
              className="rounded-full items-start"
            />

            <div>
              <h1 className="font-bold text-2xl">Kills</h1>
              <NumberTicker value={15} className="text-lg" />
            </div>
          </div>

          <div className="flex gap-6">
            <h1 className="font-bold text-xl">#2</h1>
            <h1 className="font-bold text-lg">Punis Esports</h1>
          </div>
        </ShineBorder>
      </div>
      <div>
        <ShineBorder
          className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl"
          color={["#F35B19"]}
          borderWidth={2}
        >
          <div className="flex gap-16 py-4 mx-4">
            <Image
              width={60}
              height={60}
              src={"https://picsum.photos/200"}
              alt="profile"
              className="rounded-full items-start"
            />

            <div>
              <h1 className="font-bold text-2xl">Kills</h1>
              <NumberTicker value={15} className="text-lg" />
            </div>
          </div>

          <div className="flex gap-6">
            <h1 className="font-bold text-xl">#3</h1>
            <h1 className="font-bold text-lg">Punis Esports</h1>
          </div>
        </ShineBorder>
      </div>
    </div>
  );
}

export default Ranking;
