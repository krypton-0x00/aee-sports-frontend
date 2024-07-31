import SparklesText from "@/components/ui/Sparkles";
import Dropdown from "@/components/Dropdown";
import Table from "@/components/Table";

function Leaderboard() {
  return (
    <div className="relative flex  justify-center flex-col items-center">
      <SparklesText text="Leaderboard" className="text-4xl py-4" />
      <Dropdown />
      <Table />
      <Dropdown className="mt-12" />
      <Table />
    </div>
  );
}

export default Leaderboard;
