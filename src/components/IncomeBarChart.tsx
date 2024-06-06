"use client";
import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

// didnt get the type right so did any
export const IncomeBarChart = ({ data }: any) => {
  return (
    <div className="h-64 mt-20 ">
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <BarChart
          data={data}
          width={500}
          height={500}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="date" />
          <YAxis />
          <Legend />

          <Bar dataKey="Income" fill="#22C55E" />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeBarChart;
