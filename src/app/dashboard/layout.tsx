// import SideBar from "@/components/Dashboard/SideBar";
import MuiSideBar from "@/components/Dashboard/MuiSideBar"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <hr />
    <div className={`bg-black text-textColor flex`}>
      <MuiSideBar />
      {children}
    </div>
    </>
  );
}
