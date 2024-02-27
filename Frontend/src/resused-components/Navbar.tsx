import { RxHamburgerMenu } from "react-icons/rx";
import { SiFireship } from "react-icons/si";
import { HiOutlineInbox } from "react-icons/hi";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import { CiSearch } from "react-icons/ci";
import { OpenSmallScreenNavigationType } from "./Interfaces";
import { TbCategory } from "react-icons/tb";

const Navbar = ({
  setOpenSmallScreenNavigation,
}: OpenSmallScreenNavigationType) => {
  const handleOpenSmallScreenNav = () => {
    setOpenSmallScreenNavigation(true);
  };
  return (
    <>
      <header className="w-full flex-flex-col gap-5 border-y py-6 max-sm:py-3">
        <div className="w-full flex justify-between items-center lg:max-w-[1200px] mx-auto max-sm:hidden">
          <div className="flex justify-start  gap-5 items-center">
            <CustomButton btn_text="Login" type="button" className="px-8" />
            <ul className="flex justify-center items-center gap-8  font-bold">
              <li className="hover:text-[#5138ec] cursor-pointer flex justify-center items-center gap-1 flex-shrink-0">
                <SiFireship className="text-lg" />
                Hot Deals
              </li>
              <li className="hover:text-[#5138ec] cursor-pointer flex justify-center items-center gap-1 flex-shrink-0">
                <HiOutlineInbox className="text-lg" />
                Orders
              </li>
              <li className="hover:text-[#5138ec] cursor-pointer flex justify-center items-center gap-1 flex-shrink-0">
                <TbCategory className="text-lg" />
                Categories
              </li>
            </ul>
          </div>
          <div className="flex justify-start  gap-5 items-center">
            <ul className="group flex justify-center items-center gap-8  font-bold">
              <li className="hover:text-[#5138ec] hover:dark:text-blue-800 cursor-pointer">
                Home
              </li>
              <li className="hover:text-[#5138ec] hover:dark:text-blue-800 cursor-pointer">
                About
              </li>

              <li className="hover:text-[#5138ec] hover:dark:text-blue-800 cursor-pointer">
                Vendors
              </li>
              <li className="hover:text-[#5138ec] hover:dark:text-blue-800 cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-5 sm:hidden max-sm:px-5">
          <CustomInput
            input_type="search"
            value={"hhhdh"}
            name="search"
            className="max-w-[500px] mx-auto w-full"
            icon={<CiSearch className="text-lg" />}
          />
          <div
            className="w-[40px] rounded-lg flex items-center justify-center h-[40px] primary flex-shrink-0 text-white text-xl font-bold sm:hidden"
            onClick={handleOpenSmallScreenNav}
          >
            <RxHamburgerMenu strokeWidth={1} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
