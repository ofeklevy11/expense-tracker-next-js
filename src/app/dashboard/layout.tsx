import SideNavBar from "@/components/SideNavBar";


export default async function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

  
  
    return (
        <div className="flex">
        <SideNavBar/>
            <main className="container max-w-[1100px] pt-10"  >
          {children}
          <footer className="border-t text-center p-10 mt-20">
        <div className="font-semibold">All rights reserved to ExpenseTracker &copy;</div>
      </footer>
          </main>
          </div>
  
          
    );
  }
  