"use client";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import React, { useState } from "react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import PageTitle from "@/components/PageTitle";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FaEdit, FaSave, FaTrash } from "react-icons/fa";
import DeleteExpense from "@/components/DeleteExpense";
import { useSession } from "next-auth/react";
import UpdateExpense from "@/components/UpdateExpense";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { updateExpense } from "@/app/actions/action";
import { useParams } from "next/navigation";
import type { Transaction } from "@prisma/client";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";

const page = ({
  id,
  transaction,
}: {
  id: number;
  transaction: Transaction;
}) => {
  if (!transaction) {
    return;
  }
  const [name, setName] = useState(transaction.name);
  const [amount, setAmount] = useState(transaction.amount);
  const [type, setType] = useState(transaction.type);
  const [date, setDate] = React.useState<Date>();

  const session = useSession();
  const userId = Number(session.data?.user.id);
  if (!userId) {
    return null;
  }

  return (
    <div className="">
      <div className="mt-12 flex flex-col gap-4 max-w-[500px] mx-auto items-center ">
        {/* <UpdateExpense/> */}
        <Label htmlFor="name">Transaction Name</Label>

        <Input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Label htmlFor="amount">Transaction Amount</Label>

        <Input
          name="amount"
          type="number"
          value={Number(amount)}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
                        <Label htmlFor="type">Transaction Type</Label>

        <RadioGroup
          name="type"
          value={type}
          onValueChange={(e) => setType(e)}
          defaultValue={type}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="expense"
              id="expense"
              checked={type === "expense"}
            />
            <Label htmlFor="expense">Expense</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="income"
              id="income"
              checked={type === "income"}
            />
            <Label htmlFor="income">Income</Label>
          </div>
        </RadioGroup>
        {/* <Input
          className="hidden"
          readOnly
          name="id"
          type="number"
          value={transactionId}
        ></Input>
        <Button>Submit</Button> */}

        {/* <Input
          className="hidden"
          readOnly
          name="userId"
          type="number"
          value={userId}
        ></Input> */}
                        <Label >Transaction Date</Label>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Button
          className="w-30 flex gap-3 mx-auto font-semibold py-6 px-6 mt-4 bg-blue-500/35 hover:bg-blue-500/20 text-white"
          onClick={() => updateExpense(id, name, amount, type, date)}
        >
          Save changes <FaSave />
        </Button>
      </div>
    </div>
  );
};

export default page;
