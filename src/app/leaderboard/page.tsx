import Heading from "@/components/Table/Heading";
import Row from "@/components/Table/Row";
import GradualSpacing from "@/components/ui/GradualSpacing";
import SparklesText from "@/components/ui/Sparkles";

function Leaderboard() {
  return (
    <div className="relative flex  justify-center flex-col items-center">
      <SparklesText text="Leaderboard" className="text-4xl py-4" />
      <GradualSpacing text="NxS Weekly War Season 19" />
      <div className="  flex flex-col  items-center w-[90%]">
        <Heading />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
      <GradualSpacing text="NxS Weekly War Season 19" className="mt-12" />

      <div className="flex flex-col  items-center w-[90%]">
        <Heading />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    </div>
  );
}

export default Leaderboard;
