import { Card, CardHeader, CardContent } from "@/components/ui/card";

const Balance = ({ income, expenses }) => {
  const balance = income - expenses;

  return (
    <Card className="w-full">
      <CardHeader>
        <h2 className="text-xl font-semibold text-center">Your Balance</h2>
      </CardHeader>
      <CardContent className="flex justify-around text-center">
        <div>
          <p className="text-gray-500">Income</p>
          <p className="text-green-600 font-bold">₹{income}</p>
        </div>
        <div>
          <p className="text-gray-500">Expenses</p>
          <p className="text-red-600 font-bold">₹{expenses}</p>
        </div>
        <div>
          <p className="text-gray-500">Balance</p>
          <p className="text-blue-600 font-bold">₹{balance}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Balance;
