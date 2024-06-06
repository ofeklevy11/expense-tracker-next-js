import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import PageTitle from "@/components/PageTitle";

import UpdateExpense from "@/components/UpdateExpense";
import { redirect } from "next/navigation";

const page = async ({ params }: { params: { id: number } }) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/')
  }
  const transactionId = Number(params.id);

  const transaction = await prisma.transaction.findUnique({
    where: {
      id: transactionId,
      userId : Number(session.user.id)
    },
  });

  const userId = Number(session.user.id);

  if (transaction?.userId !== userId) {
    return;
  }

  if (!transaction) {
    return;
  }

  return (
    <div className="pt-60">
      <PageTitle title="Edit Transaction" />
      <UpdateExpense id={transaction.id} transaction={transaction} />
    </div>
  );
};

export default page;
