import { CgClose } from "react-icons/cg";
import { useRef } from "react";
import Logo from "./Logo";
import SectionTitle from "./SectionTitle";
import { OpenCartType } from "./Interfaces";
const ArrayOfCarts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Cart({ OpenCart, setOpenCart }: OpenCartType) {
  const CartRef = useRef<HTMLDivElement>(null);
  const handleClosecart = () => {
    CartRef.current!.classList.replace("slide_in_cart", "slide_out_cart");
    setTimeout(() => {
      setOpenCart(false);
    }, 500);
  };
  return (
    OpenCart && (
      <section className="w-full h-screen bg-black/80 fixed top-0 left-0 z-20 flex items-center justify-end overflow-hidden backdrop-blur-sm">
        <div
          className="flex items-center slide_in_cart gap-5 w-full max-w-[500px]"
          ref={CartRef}
        >
          <div
            className="w-[3px] h-[100px] rounded-lg cursor-pointer bg-white max-sm:hidden"
            onClick={handleClosecart}
          ></div>
          <div className="w-[500px] max-sm:w-full h-screen rounded-s-xl bg-white p-5 relative max-sm:rounded-none">
            <div className="w-full flex flex-col gap-5 items-center justify-between mb-5">
              <div className="flex items-center w-full justify-start gap-5 relative">
                <Logo className="text-4xl primary-text" />
                <SectionTitle title_class="" title="Your Shopping Cart" />
                <div
                  className="absolute text-xl right-0 cursor-pointer sm:hidden"
                  onClick={handleClosecart}
                >
                  <CgClose />
                </div>
              </div>
              <div className="flex items-center gap-5 justify-center font-bold bg-green-500 text-white p-3 rounded-lg w-full">
                <div>Subtotal:</div>
                <div className="font-[poppins] text-sm">43,5000.00NGN</div>
              </div>
            </div>
            <div className="w-full divide-y border-y border-gray-100 divide-gray-100 h-[80vh] overflow-y-scroll">
              {ArrayOfCarts.map((_, index) => (
                <div
                  className="w-full p-5 max-sm:px-0 rounded-lg  border-gray-200 flex items-center justify-between"
                  key={index}
                >
                  <div className="w-[80px] h-[80px] surface"></div>
                  <div className="">
                    <h4 className="font-bold text-sm font-[poppins]">
                      Derium Shirt
                    </h4>
                    <p className="text-[10px]">Ref:789237892309</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="font-bold text-base">1</div>
                    <div className="flex-col flex gap-2">
                      <span className="w-5 h-5 primary rounded-full flex items-center justify-center text-sm text-white font-bold cursor-pointer">
                        +
                      </span>
                      <span className="w-5 h-5 primary rounded-full flex items-center justify-center text-sm text-white font-bold cursor-pointer">
                        -
                      </span>
                    </div>
                  </div>
                  <div className="font-bold text-sm">7500.00 NGN</div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 w-full left-0">
              <div className="h-[50px] w-full p-5 primary flex items-center justify-center text-lg font-bold text-white cursor-pointer">
                Checkout
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
}

export default Cart;
