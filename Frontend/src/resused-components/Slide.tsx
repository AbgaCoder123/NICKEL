import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import CustomButton from "./CustomButton";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { AiFillStar } from "react-icons/ai";
import { BiSolidCartAdd } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
let products = [
  {
    id: 1,
    title: "T Shirt Casual Cotton Short",
    price: "N 5,000",
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image: "/public/ab7acd6536f6eb20835b77ab9f0529a3-removebg-preview.png",
    rating: { rate: 3.6, count: 145 },
  },
  {
    id: 2,
    title: "Blue T-Shirt",
    price: "N 12,000",
    description: "Comfortable blue T-shirt for everyday wear.",
    category: "men's clothing",
    image: "/public/de6e639324d7a4dfb3a1e1858e2d3149-removebg-preview.png",
    rating: { rate: 4.2, count: 98 },
  },
  {
    id: 3,
    title: "Black Leather Jacket",
    price: "N 13,000",
    description: "Stylish black leather jacket for men.",
    category: "men's clothing",
    image: "/public/e1e958ce4342e7d747b592dfd92b1509-removebg-preview.png",
    rating: { rate: 4.5, count: 230 },
  },
  {
    id: 4,
    title: "Denim Shorts",
    price: "N 14,000",
    description: "Casual denim shorts for women.",
    category: "women's clothing",
    image: "/public/faa9b68cb1f6766fffd5d71a7971889f-removebg-preview.png",
    rating: { rate: 4.0, count: 120 },
  },
  {
    id: 5,
    title: "Red Dress",
    price: "N 12,000",
    description: "Elegant red dress for special occasions.",
    category: "women's clothing",
    image: "/public/f41791254509916ec4136614eeefa0e2-removebg-preview.png",
    rating: { rate: 4.8, count: 200 },
  },
];

// Limiting the array to 5 elements
let limitedProducts = products.slice(0, 5);

console.log(limitedProducts);

function Slide() {
  return (
    <section className="w-full border-b h-full py-5">
      <Splide
        hasTrack={false}
        className="w-full max-w-[1200px] mx-auto max-sm:px-5  flex items-center h-[70vh]  max-sm:h-[calc(100%-(88px+65.6px))]"
        options={{
          type: "fade",
          autoplay: true,
          rewind: true,
          drag: false,
          interval: 10000,
          easing: "linear",
          speed: 300,
          classes: {
            pagination:
              "splide__pagination w-full bottom-5 gap-1  max-sm:justify-start max-sm:px-5 max-sm:gap-2 max-sm:!hidden",
            page: "w-[6px] h-[6px] bg-zinc-500 max-sm:w-[10px] rounded-full max-sm:!hidden",
          },
        }}
      >
        <div className="splide__arrows absolute h-fit flex items-center justify-between gap-5 max-sm:right-5 max-[360px]:top-[200px] max-[360px]: max-sm:bottom-1 max-sm:gap-3  sm:w-full">
          <button className="splide__arrow !w-[50px] !h-[50px]  text-lg splide__arrow--prev !rounded-lg op !relative  !left-0 !transform-none max-sm:!bg-gray-300 !bg-[#5138ec]  !opacity-100">
            <BiChevronLeft className="!-rotate-[50]" />
          </button>
          <button className="splide__arrow !w-[50px] !h-[50px]  text-lg splide__arrow--next !rounded-lg op !relative !right-0 !transform-none max-sm:!bg-gray-300 !bg-[#5138ec]  !opacity-100">
            <BiChevronRight />
          </button>
        </div>
        <SplideTrack className=" w-full">
          {products.map((product, index) => (
            <SplideSlide
              className="text-black font-[poppins] flex max-sm:flex-col max-sm:gap-10 items-center justify-center relative"
              key={index}
            >
              <div className="sm:w-1/2 w-full h-full flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.image}
                  className="object-contain w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] relative z-10"
                />
                <div className="sm:w-[350px] sm:h-[350px] w-full h-[200px] rounded-xl sm:rounded-full blur opacity-95 surface absolute"></div>
              </div>
              <div className="sm:w-1/2 w-full flex items-start justify-center flex-col space-y-5">
                <div className="flex items-center justify-center gap-5">
                  <span className="font-bold">Review</span>
                  <span className="text-[10px] flex justify-start items-center text-yellow-500">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                </div>
                <div className="capitalize font-bold text-3xl sm:text-5xl w-[350px] primary-text">
                  {product.title}
                </div>
                <div className="w-[350px] leading-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, cupiditate obcaecati labore aut neque aperiam?
                </div>
                <div className="font-bold text-xl">{product.price}</div>
                <div className="gap-3 sm:gap-5 flex items-center justify-start max-sm:w-full">
                  <div className="w-[50px] h-[50px] rounded-full surface flex flex-col items-center justify-center text-black flex-shrink-0">
                    <MdFavoriteBorder className="text-2xl" />
                  </div>
                  <CustomButton
                    btn_text="Add to cart"
                    className="h-[55px] px-5 gap-8"
                    icon={
                      <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#6551e5] rounded-full">
                        <BiSolidCartAdd className="text-xl" />
                      </div>
                    }
                  />
                </div>
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </section>
  );
}

export default Slide;
