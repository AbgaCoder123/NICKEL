import  { ReactNode } from "react";

function SideNav({ children }: { children: ReactNode }) {
  return (
    <>
      <section className="h-full flex flex-col gap-5 max-sm:hidden">{children}</section>
    </>
  );
}

export default SideNav;


