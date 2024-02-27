import Logo from "./Logo";
import { CiSearch } from "react-icons/ci";
import { MdFavoriteBorder, MdOutlineAccountCircle } from "react-icons/md";
import { BiCartAlt } from "react-icons/bi";
import SectionsTitle from "./SectionTitle";
import CustomInput from "./CustomInput";
import { OpenCartType } from "./Interfaces";

function SearchHeader({ setOpenCart }: OpenCartType) {
  //==================================================================================================//
  //======================================= ALL CALLBACK FUNCTION ====================================//
  const handleOpenCart = () => {
    setOpenCart(true);
  };
  //======================================= ALL CALLBACK FUNCTION ====================================//
  //==================================================================================================//
  return (
    <>
      <header className="w-full h-full  flex items-center justify-between gap-10 py-5 lg:max-w-[1200px] max-sm:px-5  mx-auto">
        <div className=" flex items-center justify-center gap-3 max-sm:gap-1 flex-shrink-0">
          <Logo className="text-4xl primary-text" />
          <SectionsTitle
            additional_class="flex-shrink-0"
            title="Nickel"
            title_class="text-3xl"
            subtitle="Market & Gorcery"
            subtitle_class="text-[10px] !leading-[2px] font-bold mb-2 tracking-wider"
          />
        </div>
          <CustomInput
            input_type="search"
            value={"hhhdh"}
            name="search"
            
            className="max-md:hidden"
            icon={<CiSearch className="text-lg" />}
          />
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center ps-0 p-3 gap-2 cursor-pointer font-bold group">
            <div className="relative">
              <div className="w-[15px] h-[15px] flex items-center justify-center absolute top-[-7px] right-[-7px] font-bold text-white text-[8px] primary rounded-full">
                0
              </div>
              <MdFavoriteBorder  className="text-lg max-sm:text-2xl group-hover:text-[#5138ec]" />
            </div>
            <span className="max-md:hidden group-hover:text-[#5138ec]">Favourite</span>
          </div>
          <div
            className="flex justify-center items-center p-3 gap-2 cursor-pointer font-bold group"
            onClick={handleOpenCart}
          >
            <div className="relative">
              <div className="w-[15px] h-[15px] flex items-center justify-center absolute top-[-7px] right-[-7px] font-bold text-white text-[8px] bg-green-500 rounded-full">
                0
              </div>

              <BiCartAlt  className="text-lg max-sm:text-2xl group-hover:text-[#5138ec]" />
            </div>
            <span className="max-md:hidden group-hover:text-[#5138ec]">Cart</span>
          </div>
          <div className="flex justify-center items-center p-3 gap-2 cursor-pointer font-bold group pe-0">
            <div className="relative">
              <MdOutlineAccountCircle  className="text-lg max-sm:text-2xl group-hover:text-[#5138ec]" />
            </div>
            <span className="max-md:hidden group-hover:text-[#5138ec]">Account</span>
          </div>
        </div>
      </header>
    </>
  );
}

export default SearchHeader;
