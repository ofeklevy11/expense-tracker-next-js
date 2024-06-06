"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const AccordionMonthlyGoal = () => {
  return (
    <>
      <Accordion className="w-auto text-xl mt-8" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Should my monthly expense goal be the same as my total budget
            amount?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Not necessarily. Your expense goal might be slightly lower than your
            total budget to account for potential fluctuations or unexpected
            costs. Think of your budget as a spending plan, and your goal as the
            target you aim to hit (or stay under) each month.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion className="w-auto text-xl" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            How much should I factor in for unexpected expenses when setting my
            goal?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            There's no one-size-fits-all answer, but a good rule of thumb is to
            allocate 5-10% of your budget for unexpected costs like car repairs
            or medical bills. This buffer can be included in your expense goal
            or kept separate within your budget for easy access.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion className="w-auto text-xl" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            I'm new to budgeting. Should I set a super ambitious expense goal?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            It's wise to start with a realistic goal, especially if you're
            unfamiliar with your spending habits. Analyze your past few months'
            bank statements to get a clear picture of your average monthly
            expenses. Set a goal that's slightly lower than that average,
            allowing room for adjustment as you track your spending and refine
            your budget.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion className="w-auto text-xl" type="single" collapsible>
        <AccordionItem value="item-1" className="">
          <AccordionTrigger>
            What if my income fluctuates? How can I set a workable expense goal?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            If your income isn't consistent, consider using a rolling average of
            your income for the past 3-6 months to create a more stable baseline
            for your expense goal. This helps account for income variations and
            ensures your goal remains achievable.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
  
    </>
  );
};

export default AccordionMonthlyGoal;
