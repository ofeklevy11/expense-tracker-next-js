"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addExpense(formData: FormData) {
  const name = formData.get("name") as string;
  const amount =
    formData.get("amount") !== null ? Number(formData.get("amount")) : 0;
  const type = formData.get("type") as string;
  const userId =
    formData.get("userId") !== null ? Number(formData.get("userId")) : 420;
  const createdAt = formData.get("createdAt") as string;
  const createdAtDate = new Date(createdAt);

  await prisma.transaction.create({
    data: {
      name,
      amount,
      type,
      createdAt: createdAtDate,
      userId,
    },
  });

  revalidatePath("/dashboard/all-transactions");
  redirect("/dashboard/all-transactions");
}

export async function updateExpense(
  id: number,
  name: string,
  amount: number,
  type: string,
  createdAt: Date | undefined
) {
  await prisma.transaction.update({
    where: {
      id,
    },
    data: {
      name,
      amount,
      type,
      createdAt,
    },
  });

  revalidatePath("/dashboard/all-transactions");
  redirect("/dashboard/all-transactions");
}

export async function deleteExpense(id: number) {
  await prisma.transaction.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/all-transactions");
  // redirect("/dashboard/all-transactions");
}

export async function setMonthlyGoal(formData: FormData) {
  const amount =
    formData.get("amount") !== null ? Number(formData.get("amount")) : 0;
  const userId =
    formData.get("userId") !== null ? Number(formData.get("userId")) : 420;

  await prisma.monthlyGoal.create({
    data: {
      amount,
      userId,
    },
  });

  revalidatePath("/dashboard");
  redirect("/dashboard");
}

export async function updateMonthlyGoal(formData: FormData) {
  const amount =
    formData.get("amount") !== null ? Number(formData.get("amount")) : 0;
  const id = formData.get("id") as string;
  const idToNum = Number(id);
  await prisma.monthlyGoal.update({
    where: {
      id:idToNum
    },
    data: {
      amount,
    },
  });
  revalidatePath("/dashboard/profile");
  // redirect("/dashboard");
}
