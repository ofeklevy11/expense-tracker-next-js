import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import PageTitle from "@/components/PageTitle";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import DeleteExpense from "@/components/DeleteExpense";
import Link from "next/link";
import { redirect } from "next/navigation";
import PaginationControls from "@/components/PaginationControls";
import { MdModeEditOutline } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams["page"] ?? 1;
  const per_page = searchParams["per_page"] ?? 8;
  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const session = await getServerSession(authOptions);
  const userId = Number(session?.user.id);
  if (!session) {
    redirect("/");
  }

  const transactions = await prisma.transaction.findMany({
    where: {
      userId: userId,
    },
  })
  // const transactionsCount = await prisma.transaction.count();
  const transactionsCount = transactions.length
  
  const entries = transactions.slice(start, end);

  return (
    <div>
      {!transactions || transactions.length === 0 ? (
        <div className="  h-screen text-center">
          <h1 className="text-3xl font-bold mt-12">You have 0 transactions.</h1>
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              width="500"
              height="500"
              viewBox="0 0 809 617.658"
            >
              <rect
                x="310.755"
                y="57.658"
                width="420"
                height="560"
                rx="4"
                fill="#fff"
              />
              <path
                d="M922.255,758.82884h-412a4.00458,4.00458,0,0,1-4-4v-552a4.00458,4.00458,0,0,1,4-4h412a4.00458,4.00458,0,0,1,4,4v552A4.00458,4.00458,0,0,1,922.255,758.82884Zm-412-558a2.00214,2.00214,0,0,0-2,2v552a2.00213,2.00213,0,0,0,2,2h412a2.00213,2.00213,0,0,0,2-2v-552a2.00214,2.00214,0,0,0-2-2Z"
                transform="translate(-195.5 -141.171)"
                fill="#cacaca"
              />
              <path
                id="a6f80ec2-9665-4b0d-9b96-9f178d319553-232"
                data-name="Path 2621"
                d="M863.252,324.201h-294a7.5,7.5,0,0,1,0-15h294a7.5,7.5,0,1,1,0,15Z"
                transform="translate(-195.5 -141.171)"
                fill="#e6e6e6"
              />
              <path
                id="af435bc5-0b88-4d77-bfed-030ae9fdf7f6-233"
                data-name="Path 2624"
                d="M863.252,372.701h-294a7.5,7.5,0,0,1,0-15h294a7.5,7.5,0,1,1,0,15Z"
                transform="translate(-195.5 -141.171)"
                fill="#e6e6e6"
              />
              <path
                id="e557133a-77b8-499f-bd16-c334895c1269-234"
                data-name="Path 2625"
                d="M863.252,421.201h-294a7.5,7.5,0,0,1,0-15h294a7.5,7.5,0,1,1,0,15Z"
                transform="translate(-195.5 -141.171)"
                fill="#e6e6e6"
              />
              <path
                id="ec19a4b8-f44f-4645-b4d7-76344dff0125-235"
                data-name="Path 2626"
                d="M863.252,469.701h-294a7.5,7.5,0,0,1,0-15h294a7.5,7.5,0,0,1,0,15Z"
                transform="translate(-195.5 -141.171)"
                fill="#e6e6e6"
              />
              <path
                id="e86d23b2-1618-4af8-9c24-b5d1e0a773ab-236"
                data-name="Path 2627"
                d="M863.252,518.201h-294a7.5,7.5,0,0,1,0-15h294a7.5,7.5,0,1,1,0,15Z"
                transform="translate(-195.5 -141.171)"
                fill="#e6e6e6"
              />
              <path
                d="M568.85052,417.67562a12.38907,12.38907,0,0,0-.38893,1.91174l-52.1105,26.30249-11.87589-7.74967L490.437,454.53436l19.69066,15.76241a9.41616,9.41616,0,0,0,11.295.35551l54.35162-38.159a12.35531,12.35531,0,1,0-6.92383-14.81769Z"
                transform="translate(-195.5 -141.171)"
                fill="#ffb6b6"
              />
              <path
                d="M514.64262,446.88338l-17.2747,20.42522a5.29664,5.29664,0,0,1-8.02.0791l-17.61962-20.02062a14.70972,14.70972,0,0,1,19.0637-22.407l22.59747,14.00141a5.29663,5.29663,0,0,1,1.25313,7.92187Z"
                transform="translate(-195.5 -141.171)"
                fill="#1f1c46"
              />
              <polygon
                points="254.098 605.118 266.358 605.118 272.19 557.83 254.096 557.83 254.098 605.118"
                fill="#ffb6b6"
              />
              <path
                d="M446.47047,742.28638l24.14405-.001h.001A15.38731,15.38731,0,0,1,486.002,757.67164v.5l-39.53076.00146Z"
                transform="translate(-195.5 -141.171)"
                fill="#2f2e41"
              />
              <polygon
                points="251.336 473.432 254.822 485.185 301.817 477.332 296.671 459.985 251.336 473.432"
                fill="#ffb6b6"
              />
              <path
                d="M449.78419,610.46639l6.86566,23.14731.00028.00093a15.38732,15.38732,0,0,1-10.37648,19.12612l-.47937.14216-11.24093-37.89885Z"
                transform="translate(-195.5 -141.171)"
                fill="#2f2e41"
              />
              <path
                id="b5225405-dc09-4398-8f75-a858b019bf8f-237"
                data-name="Path 2622"
                d="M865.776,627.25773H670.727c-2.748,0-4.976-3.358-4.976-7.5s2.228-7.5,4.976-7.5H865.776c2.748,0,4.976,3.358,4.976,7.5S868.524,627.25773,865.776,627.25773Z"
                transform="translate(-195.5 -141.171)"
                fill="#e6e6e6"
              />
              <path
                id="a2f1c4f7-b8f3-4baf-98d5-81fcbaba2af5-238"
                data-name="Path 2623"
                d="M865.776,670.25773H670.727c-2.748,0-4.976-3.358-4.976-7.5s2.228-7.5,4.976-7.5H865.776c2.748,0,4.976,3.358,4.976,7.5S868.524,670.25773,865.776,670.25773Z"
                transform="translate(-195.5 -141.171)"
                fill="#e6e6e6"
              />
              <circle
                id="e62fa462-3819-44fb-9424-9fc2fe7133de"
                data-name="Ellipse 512"
                cx="730.75501"
                cy="57.659"
                r="57.659"
                fill="#1f1c46"
              />
              <path
                id="b20583ce-2285-4a88-ae2b-42b53348cdcc-239"
                data-name="Path 2642"
                d="M902.231,195.024a3.805,3.805,0,0,0,0,7.61h20.22v20.219a3.80451,3.80451,0,0,0,7.609,0V202.634h20.22a3.805,3.805,0,1,0,0-7.61H930.06v-20.22a3.8045,3.8045,0,0,0-7.609,0v20.22Z"
                transform="translate(-195.5 -141.171)"
                fill="#fff"
              />
              <path
                id="a69a945f-f2e5-47e0-ba72-38a008e8891a-240"
                data-name="Path 2632"
                d="M573.49,590.42h0a20.065,20.065,0,0,1-17.054,9.741L482.752,623.75l-3.369-19.541L524,580l-43.227-31.133,31.67-37.06,57.522,53.613a20.066,20.066,0,0,1,3.525,25Z"
                transform="translate(-195.5 -141.171)"
                fill="#2f2e41"
              />
              <path
                id="e980cf0f-d800-4ee3-940e-45939556ba77-241"
                data-name="Path 2633"
                d="M466.622,724.059H448.429c-16.335-111.969-32.962-224.25,16.172-266.16l57.949,9.434-7.412,49.189-32.343,37.06Z"
                transform="translate(-195.5 -141.171)"
                fill="#2f2e41"
              />
              <path
                id="eba62579-0c8c-463a-8046-e804be002a11-242"
                data-name="Path 2637"
                d="M519.007,487.62c-24.526,16.713-56.20822,12.78322-69.43222-12.11977,19-32,23-55,7.7052-65.50022a36.273,36.273,0,0,1,22.145-43.742h0l28.974,12.129c24.6,20.054,29.445,41.776,20.215,64.687Z"
                transform="translate(-195.5 -141.171)"
                fill="#1f1c46"
              />
              <rect
                id="e895ce6e-6fd8-41df-ae63-d595344ec23b"
                data-name="Rectangle 53"
                y="615.658"
                width="809"
                height="2"
                fill="#cacaca"
              />
              <path
                id="e192092a-ee6f-4331-8843-6655178f0707-243"
                data-name="Path 438"
                d="M348.841,711.227a22.96307,22.96307,0,0,0,22.175-3.906c7.767-6.519,10.2-17.259,12.183-27.2l5.86-29.414-12.268,8.445c-8.823,6.076-17.846,12.346-23.955,21.146s-8.776,20.813-3.867,30.335"
                transform="translate(-195.5 -141.171)"
                fill="#e6e6e6"
              />
              <path
                id="a858933f-d134-4d1f-a5b1-d2ecd5f2e072-244"
                data-name="Path 439"
                d="M350.736,748.884c-1.548-11.251-3.133-22.645-2.048-34.018.962-10.1,4.043-19.963,10.316-28.051a46.66331,46.66331,0,0,1,11.972-10.849c1.2-.756,2.3,1.142,1.107,1.894a44.36182,44.36182,0,0,0-17.547,21.172c-3.82,9.717-4.434,20.309-3.775,30.632.4,6.242,1.242,12.444,2.092,18.637a1.136,1.136,0,0,1-.766,1.349,1.1,1.1,0,0,1-1.349-.766Z"
                transform="translate(-195.5 -141.171)"
                fill="#f2f2f2"
              />
              <path
                id="f4641f1e-7695-45f0-a79a-94f4839885fa-245"
                data-name="Path 440"
                d="M252.323,732.078a17.076,17.076,0,0,0,15.695,5.834c7.434-1.261,13.036-7.235,18.047-12.869l14.825-16.665-11.049.805c-7.945.579-16.092,1.208-23.321,4.556s-13.458,10.051-13.89,18.006"
                transform="translate(-195.5 -141.171)"
                fill="#e6e6e6"
              />
              <path
                id="e7fd6c30-5753-49ca-a2fc-43310e28e2be-246"
                data-name="Path 441"
                d="M239.603,755.318c2.605-6.27,5.232-12.628,9.229-18.165a31.98678,31.98678,0,0,1,13.8-11.349,27.901,27.901,0,0,1,9.455-1.975c.846-.028.841,1.284,0,1.312a26.52263,26.52263,0,0,0-15.453,5.614c-4.909,3.857-8.428,9.134-11.21,14.657-1.682,3.34-3.122,6.794-4.556,10.245a.679.679,0,0,1-.8.464A.66.66,0,0,1,239.603,755.318Z"
                transform="translate(-195.5 -141.171)"
                fill="#f2f2f2"
              />
              <path
                id="b52aaf37-3203-4cbf-9b60-86692d62068e-247"
                data-name="Path 442"
                d="M361.851,730.832a16.9,16.9,0,0,0,14.729,7.6c7.456-.354,13.672-5.558,19.267-10.5l16.55-14.612-10.953-.524c-7.877-.377-15.957-.729-23.46,1.7s-14.422,8.275-15.794,16.041"
                transform="translate(-195.5 -141.171)"
                fill="#e6e6e6"
              />
              <path
                id="beff4645-a309-4245-bc03-2fdcf4e7d6c8-248"
                data-name="Path 443"
                d="M346.37,755.352c7.434-13.155,16.058-27.775,31.466-32.448a35.11509,35.11509,0,0,1,13.235-1.367c1.405.121,1.054,2.287-.348,2.166a32.62084,32.62084,0,0,0-21.121,5.588c-5.955,4.054-10.592,9.689-14.517,15.666-2.4,3.661-4.557,7.477-6.711,11.288C347.686,757.463,345.674,756.584,346.37,755.352Z"
                transform="translate(-195.5 -141.171)"
                fill="#f2f2f2"
              />
              <path
                id="a434c3a5-879f-494a-805a-60016a50852d-249"
                data-name="Path 461"
                d="M985.122,734.85a17.721,17.721,0,0,1-17.112-3.014c-5.994-5.031-7.873-13.319-9.4-20.993l-4.523-22.7,9.469,6.52c6.809,4.689,13.772,9.527,18.486,16.318s6.773,16.062,2.985,23.41"
                transform="translate(-195.5 -141.171)"
                fill="#e6e6e6"
              />
              <path
                id="eeef24b5-3622-48e4-8c10-5591845ab2d9-250"
                data-name="Path 462"
                d="M982.508,756.396c.833-6.067,1.689-12.212,1.105-18.343a28.8491,28.8491,0,0,0-5.563-15.126,25.16206,25.16206,0,0,0-6.456-5.85c-.646-.407-1.24.616-.6,1.021a23.92089,23.92089,0,0,1,9.462,11.417c2.06,5.24,2.391,10.951,2.036,16.517-.215,3.366-.67,6.71-1.128,10.049a.613.613,0,0,0,.413.727.6.6,0,0,0,.728-.413Z"
                transform="translate(-195.5 -141.171)"
                fill="#f2f2f2"
              />
              <path
                d="M428.46994,507.36679a10.74267,10.74267,0,0,0,7.44457-14.69441l39.60233-89.47208-22.65457-5.706-31.80418,89.74234a10.80091,10.80091,0,0,0,7.41185,20.13011Z"
                transform="translate(-195.5 -141.171)"
                fill="#ffb6b6"
              />
              <path
                d="M470.15583,419.20183l-22.03344-10.31358a4.81687,4.81687,0,0,1-1.97428-7.02163l13.39047-20.22269a13.37737,13.37737,0,0,1,24.198,11.41336l-6.92414,23.16294a4.81688,4.81688,0,0,1-6.65666,2.9816Z"
                transform="translate(-195.5 -141.171)"
                fill="#1f1c46"
              />
              <path
                d="M519.02948,359.67025h-58a4.50508,4.50508,0,0,1-4.5-4.5v-25a33.5,33.5,0,0,1,67,0v25A4.50508,4.50508,0,0,1,519.02948,359.67025Z"
                transform="translate(-195.5 -141.171)"
                fill="#2f2e41"
              />
              <circle cx="302.7972" cy="193.5583" r="24.56103" fill="#ffb6b6" />
              <path
                d="M531.45477,332.67025H495.9892l-.36377-5.0918-1.81836,5.0918h-5.46094l-.7207-10.0918-3.604,10.0918H473.45477v-.5a26.52976,26.52976,0,0,1,26.49976-26.5h5.00024a26.53,26.53,0,0,1,26.5,26.5Z"
                transform="translate(-195.5 -141.171)"
                fill="#2f2e41"
              />
            </svg>
          </div>
          <Link
            className=" w-64 mx-auto text-lg px-4 py-4 bg-blue-500 rounded-md mt-4 font-semibold text-black flex gap-3 items-center hover:bg-blue-500/75 "
            href={"/dashboard/add-transaction"}
          >
            add your first transaction
            <IoMdAddCircleOutline className="h-8 w-8"/>
          </Link>
        </div>
      ) : (
        <>
          <PageTitle title="All Transactions" />

          <div className="mt-12 flex flex-col gap-5">
            {entries.map((t) => (
              <div
                key={t.id}
                className={cn(
                  "grid  gap-24 grid-cols-5 items-center rounded-md   p-4",
                  t.type === "expense" ? "bg-red-500/30" : "bg-green-500/30"
                )}
              >
                <h3 className="text-xl ">{t.name}</h3>
                <h4
                  className={cn(
                    "text-2xl font-semibold",
                    t.type === "income" ? "text-green-500" : "text-red-400"
                  )}
                >
                  {t.amount}
                </h4>
                <h4>{t.createdAt.toLocaleDateString()}</h4>
                <DeleteExpense id={t.id} />
                <Link
                  href={`edit-transaction/${t.id}`}
                  className="bg-yellow-500 flex items-center py-2 justify-center rounded-lg text-black font-semibold gap-2"
                >
                  Edit
                  <MdModeEditOutline />
                </Link>
              </div>
            ))}
            <PaginationControls
              hasNextPage={end < transactions.length}
              hasPrevPage={start > 0}
              transactionCount={transactionsCount}
            />
          </div>
        </>
      )}

      {/* <PageTitle title="All Transactions" />

      <div className="mt-12">
        {entries.map((t) => (
          <div
            key={t.id}
            className={cn(
              "grid  gap-24 grid-cols-5 rounded-sm border border-pink-400/80 p-4",
              t.type === "expense" ? "bg-red-500/40" : "bg-green-500/40"
            )}
          >
            <h3 className="text-xl ">{t.name}</h3>
            <h4
              className={cn(
                "text-2xl font-semibold",
                t.type === "income" ? "text-green-500" : "text-red-400"
              )}
            >
              {t.amount}
            </h4>
            <h4>{t.createdAt.toLocaleDateString()}</h4>
            <DeleteExpense id={t.id} />
            <Link
              href={`edit-transaction/${t.id}`}
              className="bg-yellow-500 flex items-center justify-center rounded-lg text-black font-semibold gap-2"
            >
              Edit
              <MdModeEditOutline />

            </Link>
          </div>
        ))}
        <PaginationControls
          hasNextPage={end < transactions.length}
          hasPrevPage={start > 0}
          transactionCount={transactionsCount}
        />
      </div> */}
    </div>
  );
};

export default page;
