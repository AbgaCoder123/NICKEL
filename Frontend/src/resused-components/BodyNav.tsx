import { ReactNode } from "react";

function BodyNav({ children }: { children: ReactNode }) {
  return (
    <>
      <section className="h-full w-full flex flex-col items-center">{children}</section>
    </>
  );
}

export default BodyNav;
