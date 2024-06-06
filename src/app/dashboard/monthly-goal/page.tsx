import { setMonthlyGoal } from "@/app/actions/action";
import AccordionMonthlyGoal from "@/components/AccordionMonthlyGoal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import React from "react";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";

const page = async () => {
    
  const session = await getServerSession(authOptions);
  if(!session){
    redirect('/')
  }

  const userId = Number(session.user.id)

  const monthlyGoal = await prisma.monthlyGoal.findMany({
    where: {
        userId: userId
    }
})

if(monthlyGoal && monthlyGoal.length > 0 ) {
    redirect('/dashboard')
}
  
  return (
    <div>
        <h1 className="text-lg mb-8 font-semibold text-yellow-500">Before we are starting to track expenses please set a MAX monthly expense goal.</h1>
      <h2 className="text-xl leading-8">
        Before you choose your monthly goal <br /> we have some FAQS about how
        should you choose your MAX monthly expense goal.
      </h2>
      <AccordionMonthlyGoal />
      <h3 className="text-2xl mt-24 mb-8 text-center">Are you ready?</h3>
      <form action={setMonthlyGoal} className="flex gap-4 justify-center">
        <Input placeholder="420" name="amount" className="text-center w-24" />
        <Input
          className="hidden"
          readOnly
          name="userId"
          type="number"
          value={session?.user.id}
        ></Input>
        <Button className="font-bold bg-yellow-500 ">Save monthly goal</Button>
      </form>
      <h4 className="mt-8 text-center ">
        If you made any mistakes you can change in in the future in your
        profile.
      </h4>
    </div>
  );
};

export default page;
