import { AiFillShop, AiFillShopping } from "react-icons/ai";
import SectionTitle from "./SectionTitle";
import { ArrayOfDisplays } from "./Data";
import { useEffect, useState } from "react";
function AutoDisplayInfo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
      if (currentIndex >= ArrayOfDisplays.length - 1) setCurrentIndex(0);
    }, 10000);
  }, [currentIndex]);
  return (
    <section
      className="w-1/2 max-xl:hidden h-screen primary flex items-center justify-center !bg-no-repeat !bg-cover overflow-hidden"
      style={{
        background: `url('/public/${ArrayOfDisplays[currentIndex].background_image}')`,
      }}
    >
      <div className="backdrop-blur-lg bg-white/30 w-full max-w-[500px] rounded-3xl h-[600px] p-10 relative">
        <div className="absolute w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center right-[-20px] bottom-10 text-amber-500 text-xl">
          <AiFillShop />
        </div>
        <div className="absolute w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center left-[-20px] top-48 text-red-500 text-xl">
          <AiFillShopping />
        </div>
        <SectionTitle
          title={`${ArrayOfDisplays[currentIndex].caption}`}
          title_class="text-white !text-4xl"
        />
        <img
          className="w-full "
          src={`/public/${ArrayOfDisplays[currentIndex].image}`}
          alt={`/public/${ArrayOfDisplays[currentIndex].image}`}
        />
      </div>
    </section>
  );
}

export default AutoDisplayInfo;
