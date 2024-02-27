import  { ReactNode } from "react";

function BodyContainer({ children }: { children: ReactNode }) {
  return (
    <>
      <section className="w-full  flex py-5 gap-5 items-start max-w-[1200px]  mx-auto">
        {children}
      </section>
    </>
  );
}

export default BodyContainer;
