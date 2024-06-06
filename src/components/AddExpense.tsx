"use client";
import React from "react";
import { Input } from "./ui/input";
import { useSession } from "next-auth/react";
import { addExpense } from "@/app/actions/action";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

import { FiSend } from "react-icons/fi";

 const AddExpense = () => {
  const session = useSession();
  const today = new Date();

  const formattedDate = today.toISOString().split("T")[0];
  

  return (
    <div className="container">
      <form
        action={addExpense}
        className="max-w-[500px] mx-auto flex flex-col gap-4"
      >
        <Label htmlFor="name">Transaction Name</Label>
        <Input placeholder="Food" className="" name="name"></Input>
        <Input
          placeholder="40"
          type="number"
          max={999999}
          name="amount"
        ></Input>
        {/* need to add server validation to check if number exceed INT limit and becoming BIGINT */}

        <RadioGroup name="type" defaultValue="expense">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="expense" id="expense" />
            <Label htmlFor="Expense">Expense</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="income" id="income" />
            <Label htmlFor="income">Income</Label>
          </div>
        </RadioGroup>
        <Input
          className="hidden"
          readOnly
          name="userId"
          type="number"
          value={session.data?.user.id}
        ></Input>

        <Input
          type="date"
          name="createdAt"
          value={
            formattedDate
          }

          
        ></Input>
        <Button className="w-30 flex gap-3 mx-auto font-bold py-6 px-6 mt-4 bg-blue-500/35 hover:bg-blue-500/20 text-white ">
          submit <FiSend />
        </Button>
      </form>
    </div>
  );
};

export default AddExpense
