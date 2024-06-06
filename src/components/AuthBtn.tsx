"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function AuthButton() {
  const { data: session } = useSession();

  if (
    session &&
    session.user !== undefined &&
    session.user.name !== undefined &&
    session.user.image
  ) {
    return (
      <div className="flex flex-col gap-6 mt-12">
        <h6 className="font-semibold text-lg tracking-wider text-yellow-500">
          {" "}
          {session.user.name}{" "}
        </h6>

        <Image
          className="rounded-full w-10"
          alt="user image"
          src={session?.user?.image}
          width={200}
          height={200}
        ></Image>

        <Button
          variant={"outline"}
          onClick={() => signOut({ callbackUrl: "/", redirect: true })}
        >
          Sign Out
        </Button>
      </div>
    );
  }
  return (
    <>
      <Button onClick={() => signIn()}>Sign In</Button>
    </>
  );
}
