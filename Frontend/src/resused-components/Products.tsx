import { BiChevronRight } from "react-icons/bi";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BiCartAlt } from "react-icons/bi";
import SectionTitle from "./SectionTitle";
import { ArrayOfItems } from "./Data";
import Logo from "./Logo";

function Products() {
  const NumOfSkeletons = [];
  for (let index = 0; index < 15; index++) {
    NumOfSkeletons[index] = index;
  }

  const [title, setTitle] = useState<string>("Popular");
  return (
    <section className="w-full border-b">
      <div className="w-full flex flex-col mx-auto max-sm:px-5 py-10 max-w-[1200px] ">
        <div className="flex justify-between items-center w-full pb-5 ">
          <SectionTitle title={`${title} Products`} />
          {/* <ul className="flex justify-end items-center gap-5 font-bold max-sm:hidden">
            <li className="primary-text">All</li>
            <li>Featured</li>
            <li>Popular</li>
            <li>Newly Added</li>
          </ul> */}
          <div className="font-bold primary-text cursor-pointer flex items-center">
            View all{" "}
            <span>
              <BiChevronRight />
            </span>
          </div>
          {/* <div className="px-3 py-2 custom-border rounded-lg flex items-center gap-5">
            <div className="font-bold">Newly Added</div>
            <div className="">
              <BiChevronDown />
            </div>
          </div> */}
        </div>
        <div className="w-full grid grid-cols-5 gap-5 max-sm:grid-cols-2">
          {ArrayOfItems && ArrayOfItems.length > 0
            ? ArrayOfItems.splice(0, 10).map((ArrayOfItem, index) => (
                <div
                  className="w-full flex flex-col bg-white shadow-lg  rounded-lg p-5 text-[10px] space-y-5"
                  key={index}
                >
                  <div className="w-full flex justify-start items-center font-bold gap-1">
                    <div className="px-2  py-[1px] bg-amber-500 text-white flex justify-center items-center rounded-full">
                      Hot
                    </div>
                    <div className="px-2  py-[1px] bg-red-500 text-white flex justify-center items-center rounded-full">
                      New
                    </div>
                    <div className="px-2  py-[1px] primary text-white flex justify-center items-center rounded-full">
                      -24%
                    </div>
                  </div>
                  <div className="h-full w-full flex flex-col justify-start items-center space-y-2">
                    <div className="flex justify-center items-center w-[100px] h-[100px]">
                      <img
                        src={ArrayOfItem.image}
                        className="w-full h-full object-contain"
                        alt=""
                      />
                    </div>
                    <div className="w-full flex flex-col space-y-1">
                      <p className="font-bold text-sm line-clamp-2 leading-tight">
                        {ArrayOfItem.title}
                      </p>
                      <p className="text-[10px] flex justify-start items-center text-yellow-500">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </p>
                      <p className="text-[10px]">
                        By{" "}
                        <strong className="font-bold primary-text font-[poppins]">
                          Myk Hub
                        </strong>
                      </p>
                      <div className="w-full flex justify-between items-center max-sm:items-start max-sm:flex-col max-sm:gap-1">
                        <p className="font-bold text-sm font-[poppins] primary-text">
                          ${ArrayOfItem.price}
                        </p>
                        <div className="flex justify-center items-center bg-[#5138ec]/20 px-3 py-1 max-sm:px-3 max-sm:py-2 rounded-lg max-sm:w-full gap-1 primary-text font-bold cursor-pointer sm:rounded-sm ">
                          <BiCartAlt className="text-sm" />
                          <p>Add</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : NumOfSkeletons.map((_, index) => (
                <div
                  className="w-full flex flex-col bg-white shadow-lg  rounded-lg p-5 text-[10px] space-y-5 animate-pulse"
                  key={index}
                >
                  <div className="w-full flex justify-start items-center font-bold gap-1">
                    <div className="px-2 w-8 py-2 surface rounded-full"></div>
                    <div className="px-2 w-8 py-2 surface rounded-full"></div>
                    <div className="px-2 w-8 py-2 surface rounded-full"></div>
                  </div>
                  <div className="h-full w-full flex flex-col justify-start items-center space-y-5">
                    <div className="flex justify-center items-center surface w-full rounded-lg h-[100px]">
                      <Logo className="text-3xl primary-text" />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <div className="h-2 surface rounded"></div>
                      <div className="h-2 surface rounded"></div>
                      <div className="h-2 surface rounded mt-1"></div>
                      <div className="h-8 surface rounded mt-1"></div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
