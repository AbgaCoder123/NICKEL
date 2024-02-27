import React from "react";
interface MainContainerType {
  className?: string;
  children: React.ReactNode;
}
function MainContainer({ className, children }: MainContainerType) {
  return (
    <main
      className={`flex min-h-screen w-full font-[quicksand] text-xs  background ${className}`}
    >
      {children}
    </main>
  );
}

export default MainContainer;
