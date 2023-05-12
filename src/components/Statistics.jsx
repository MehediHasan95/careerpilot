import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      assignment: "A-1",
      Mark: 57,
    },
    {
      assignment: "A-2",
      Mark: 60,
    },
    {
      assignment: "A-3",
      Mark: 60,
    },
    {
      assignment: "A-4",
      Mark: 53,
    },
    {
      assignment: "A-5",
      Mark: 59,
    },
  ];

  let avgMark = 0;
  for (const mark of data) {
    avgMark = avgMark = avgMark + mark.Mark / data.length;
  }

  return (
    <div className="px-2 lg:px-32">
      <div className=" my-8">
        <h1 className="text-xl">Assignment Analytics</h1>
        <small>Avg Assignment Mark: {avgMark}</small>
      </div>
      <ResponsiveContainer width={"100%"} height={500}>
        <AreaChart width={500} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="assignment" />
          <YAxis />
          <Tooltip />
          <Area type="linear" dataKey="Mark" stroke="#8884d8" fill="#818DFE" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
