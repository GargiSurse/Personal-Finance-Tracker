import { Card, CardHeader, CardContent } from "@/components/ui/card";

const RecentTransactions = ({ transactions, limit = 5 }) => {
  const recent = transactions
    .slice()
    .sort((a, b) => b.id - a.id)
    .slice(0, limit);

  return (
    <Card className="w-full mt-4">
      <CardHeader>
        <h2 className="text-xl font-semibold text-center">Recent Transactions</h2>
      </CardHeader>
      <CardContent>
        {recent.length === 0 ? (
          <p className="text-center text-gray-500">No recent transactions</p>
        ) : (
          <ul className="space-y-2">
            {recent.map((txn) => (
              <li key={txn.id} className="flex justify-between border-b pb-1">
                <span>{txn.description}</span>
                <span className={txn.type === "income" ? "text-green-600" : "text-red-600"}>
                  {txn.type === "expense" ? "-" : "+"}₹{txn.amount}
                </span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
