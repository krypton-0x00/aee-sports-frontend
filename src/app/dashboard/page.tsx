import NumberTicker from "@/components/ui/NumberTicker";
import { Card } from "antd";
  
function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 m-auto mt-4" >
      <Card
        bordered={true}
        className="w-[18rem] bg-black text-textColor rounded-lg shadow-lg "
      >
        <p className="text-lg text-textColor">No of tournaments organized</p>
        <NumberTicker value={15} className="font-bold text-4xl text-textColor" />
      </Card>
      <Card
        bordered={true}
        className="w-[18rem] bg-black text-textColor rounded-lg shadow-lg"
      >
        <p className="text-lg text-textColor">No of teams registered</p>
        <NumberTicker value={15} className="font-bold text-4xl text-textColor" />
      </Card>
      <Card
        bordered={true}
        className="w-[18rem] bg-black text-textColor rounded-lg shadow-lg"
      >
        <p className="text-lg text-textColor">Youtube subs</p>
        <NumberTicker value={15} className="font-bold text-4xl text-textColor" />
      </Card>
    </div>
  );
}

export default Dashboard;

