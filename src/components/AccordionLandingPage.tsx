"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const AccordionLandingPage = () => {
  return (
    <>
      <Accordion className="w-auto text-xl mt-8" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Why should I bother tracking my expenses? I kind of know where my
            money goes.
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            You might think you know where your money goes, but expenses can
            easily add up without you realizing it. Tracking helps identify
            hidden spending patterns, like daily coffees or impulse buys, that
            can significantly impact your budget.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion className="w-auto text-xl" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What are some long-term benefits of tracking expenses?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Expense tracking empowers you to take control of your finances. By
            understanding your spending habits, you can make informed decisions
            about saving for goals, paying down debt, or simply achieving
            greater financial peace of mind. tune share more_vert
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion className="w-auto text-xl" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Tracking sounds like a hassle. Won't it take a lot of time?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Expense tracking can be surprisingly quick and painless with today's
            technology. Many trackers allow you to connect your bank accounts
            for automatic transactions, or you can simply snap photos of
            receipts.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion className="w-auto text-xl" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            I already budget, so why track expenses?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Tracking is your budget's accountability partner. It reveals if
            you're sticking to your plan and exposes areas where adjustments
            might be needed. By comparing planned spending with actual spending,
            you can refine your budget for better results.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion className="w-auto text-xl" type="single" collapsible>
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger>
            I'm not good with numbers. Will expense tracking be overwhelming?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Most expense trackers categorize your spending automatically, making
            it easy to understand where your money goes. They also present data
            in clear visuals like charts and graphs, so you can see spending
            trends without getting bogged down in numbers.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </>
  );
};

export default AccordionLandingPage;
