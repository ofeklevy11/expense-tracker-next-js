import PageTitle from "@/components/PageTitle";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Image from "next/image";
import SignOut from "@/components/signOut";
import prisma from "@/lib/db";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { updateMonthlyGoal } from "@/app/actions/action";
import { CiLogout } from "react-icons/ci";
import { GrUpdate } from "react-icons/gr";



const page = async () => {
  const session = await getServerSession(authOptions);

  if(!session){
    redirect('/')
  }

  const userId = Number(session.user.id)

  const monthlyGoal = await prisma.monthlyGoal.findFirst({
    where: {
        userId: userId
    }
})

if(!monthlyGoal ) {
    redirect('/dashboard/monthly-goal')
}
console.log(monthlyGoal);

  return (
    <div className="flex flex-col items-center">
      <PageTitle title="Profile" />
      <div className="p-8 flex flex-col gap-4 rounded-lg border mt-8 w-full">
        <p>User Name: <span className="font-semibold text-lg">{session.user.name}</span></p>
        <p>User Email: <span className="font-semibold text-lg">{session.user.email}</span></p>
        <p>User ID: <span className="font-semibold text-lg">{session.user.id}</span></p>
        <div className="flex gap-4 items-center">
        <p>User Profile Image:</p>
<Image src={session.user.image} width={50} height={50} alt="user profile image" className="rounded-full"/>
</div>
        <SignOut title='Sign Out' icon={<CiLogout className="h-5 w-5"/>}/>
      </div>
      <div className="p-8 flex flex-col gap-4 rounded-lg border mt-16 w-[500px] ">
      
      <p className="text-center mb-4">Your expense monthly goal: <span className="font-semibold text-lg">{monthlyGoal.amount}</span></p>
      <h4 className="text-lg">Update monthly goal</h4>

        <form action={updateMonthlyGoal}  className="flex gap-8 items-center">
            <Input type="number" name="amount" className="w-40"/>
            <Input readOnly name="id" value={monthlyGoal.id} className="hidden"/>
            <Button className="font-bold flex gap-3">Update <GrUpdate />
</Button>
        </form>
      </div>
    </div>
  );
};

export default page;
