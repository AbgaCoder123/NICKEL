import { TbPhoneCall } from "react-icons/tb";
import { FaInfoCircle } from "react-icons/fa";
import { HiBell } from "react-icons/hi";
import { MdPerson4 } from "react-icons/md";
import { TbCategory } from "react-icons/tb";
import { CgClose } from "react-icons/cg";
import Logo from "./Logo";
import SectionTitle from "./SectionTitle";
import { HiHome, HiOutlineInbox } from "react-icons/hi";
import CustomButton from "./CustomButton";
import { SiFireship } from "react-icons/si";
import { useRef } from "react";
import { OpenSmallScreenNavigationType } from "./Interfaces";

function SmallscreenNav({
  OpenSmallScreenNavigation,
  setOpenSmallScreenNavigation,
}: OpenSmallScreenNavigationType) {
  const NavigationRef = useRef<HTMLDivElement>(null);
  const handleCloseNavigation = () => {
    NavigationRef.current!.classList.replace(
      "slide_in_smallscreen_navigation",
      "slide_out_smallscreen_navigation"
    );
    setTimeout(() => {
      setOpenSmallScreenNavigation(false);
    }, 500);
  };
  return (
    OpenSmallScreenNavigation && (
      <section className="w-full min-h-screen bg-black/80 fixed top-0 left-0 z-20 flex items-center justify-start  backdrop-blur-sm sm:hidden">
        <div
          className="flex items-start flex-col gap-3 overflow-y-scroll relative w-full h-screen bg-white px-5 slide_in_smallscreen_navigation"
          ref={NavigationRef}
        >
          <div className="w-full flex items-center justify-between py-5">
            <div className=" flex items-center justify-center gap-3 max-sm:gap-1">
              <Logo className="text-4xl primary-text" />
              <SectionTitle
                additional_class="flex-shrink-0"
                title="Nickel"
                title_class="text-3xl"
                subtitle="Market & Gorcery"
                subtitle_class="text-[10px] !leading-[2px] font-bold mb-2 tracking-wider"
              />
            </div>
            <div
              className="text-xl cursor-pointer"
              onClick={handleCloseNavigation}
            >
              <CgClose />
            </div>
          </div>
          <div className="w-full flex gap-3 items-center">
            <CustomButton
              btn_text="Sign up"
              className="text-base px-5 py-7 w-full"
            />
            <CustomButton
              btn_text="Log in"
              className="text-base px-5 py-7 w-full !bg-transparent border-2 primary-text primary-border"
            />
          </div>
          <div className="bg-white shadow rounded-lg p-5 w-full text-base flex items-center gap-5">
            <span className="text-amber-500 text-2xl">
              <HiHome />
            </span>{" "}
            <span className="font-bold">Home</span>
          </div>
          <div className="bg-white shadow rounded-lg p-5 w-full text-base flex items-center gap-5">
            <span className="text-cyan-500 text-2xl">
              <TbCategory />
            </span>{" "}
            <span className="font-bold">Categories</span>
          </div>
          <div className="bg-white shadow rounded-lg p-5 w-full text-base flex items-center gap-5">
            <span className="text-red-500 text-2xl">
              <SiFireship />
            </span>{" "}
            <span className="font-bold">Hot Deals</span>
          </div>
          <div className="bg-white shadow rounded-lg p-5 w-full text-base flex items-center gap-5">
            <span className="text-green-500 text-2xl">
              <HiOutlineInbox />
            </span>{" "}
            <span className="font-bold">Orders</span>
          </div>
          <div className="bg-white shadow rounded-lg p-5 w-full text-base flex items-center gap-5">
            <span className="text-blue-500 text-2xl">
              <MdPerson4 />
            </span>{" "}
            <span className="font-bold">Vendors</span>
          </div>
          <div className="bg-white shadow rounded-lg p-5 w-full text-base flex items-center gap-5">
            <span className="text-purple-500 text-2xl">
              <HiBell />
            </span>{" "}
            <span className="font-bold">Notifications</span>
          </div>
          <div className="bg-white shadow rounded-lg p-5 w-full text-base flex items-center gap-5">
            <span className="text-slate-900 text-2xl">
              <FaInfoCircle />
            </span>{" "}
            <span className="font-bold">About</span>
          </div>
          <div className="bg-white shadow rounded-lg p-5 w-full text-base flex items-center gap-5">
            <span className="text-amber-500 text-2xl">
              <TbPhoneCall />
            </span>{" "}
            <span className="font-bold">Contact us</span>
          </div>
          <div className="w-full flex items-center justify-center py-5 font-bold">
            <p>&copy; {new Date().getFullYear()}, Powered by Webbliz Teams</p>
          </div>
        </div>
      </section>
    )
  );
}

export default SmallscreenNav;
