"use client";
import React, { useEffect, useState } from "react";
import { Progress } from "./ui/progress";
import { cn } from "@/lib/utils";

const MonthlyGoalProgress = ({
  goal,
  expenses,
  progress,
}: {
  goal: number;
  expenses: number;
  progress: number;
}) => {
  const [progressBar, setProgressBar] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgressBar(progress), 1000);
    return () => clearTimeout(timer);
  }, []);

  const remainingToSpend = goal - expenses
  return (
    <div className="flex flex-col gap-4">
      <h1 className=" text-lg">
        Your monthly expense goal is :{" "}
        <span className="text-2xl text-red-400 font-semibold">{goal}</span>
      </h1>
      <h3 className="text-lg">
        Your monthly expenses:{" "}
        <span
          className={cn(
            "text-xl font-semibold",
            expenses < goal ? "text-green-500" : "text-red-500"
          )}
        >
          {expenses}
        </span>{" "}
      </h3>
      <div className="flex flex-col  gap-2">
        <h4>your monthly expenses goal progress:</h4>
        <Progress
          className={cn(
            "w-[450px] [&>*]:duration-1000",
            progress < 25
              ? "[&>*]:bg-green-500"
              : progress < 50
              ? "[&>*]:bg-green-800"
              : progress < 75
              ? "[&>*]:bg-yellow-500"
              : "[&>*]:bg-red-600"
          )}
          value={progressBar > 100 ? 100 : progressBar}
        />
        {remainingToSpend <= 0  ? (
          <p>
            You have exceeded your monthly expense goal by:{" "}
            <span className="text-red-500">{remainingToSpend}$</span>
          </p>
        ) : (
          <p>
            You are in the right direction. remaining amount to spend:{" "} 
            <span className="text-green-500">{remainingToSpend}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default MonthlyGoalProgress;
