import Image from "next/image";
import prisma from "@/lib/db";
import { signIn, useSession } from "next-auth/react";
import AuthButton from "@/components/AuthBtn";
import HeroText from "@/components/HeroText";
import SignIn from "@/components/SignIn";
import AccordionLandingPage from "@/components/AccordionLandingPage";
import PageTitle from "@/components/PageTitle";



export default async function Home() {
  
  return (
    <div className="container max-w-[1200px] pt-20 ">
        <h1 className="text-center text-4xl">Welcome to ExpenseTracker!</h1>
        <div className="flex gap-24 pt-24 ">
          <div>
        <HeroText title="Feeling overwhelmed by receipts and loose change?">
</HeroText>
        <HeroText title="Difficulty sticking to a budget?">
</HeroText>
        <HeroText title="Worried about overspending?">
</HeroText>
<div className="flex flex-col gap-4">
<h2 className="text-3xl text-yellow-500 font-semibold mt-8">This is exactly what we are helping with!</h2>
<p >Start tracking your expenses today</p>
<SignIn title="Get started"/>
</div>
</div>
      
        <div className="pt-4 mb-20">
          <Image src='/expense-report.png' width={1000} height={800} alt="" />
        </div>
        </div>
        
      <PageTitle title="FAQS" />
      <AccordionLandingPage/>
      <footer className="border-t text-center p-10 mt-20">
        <div className="font-semibold">All rights reserved to ExpenseTracker &copy;</div>
      </footer>
    </div>
  );
}
