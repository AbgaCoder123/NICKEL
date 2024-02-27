import { BiCartAlt, BiChevronRight } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";

function Deals() {
  const data = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: { rate: 4.7, count: 500 },
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: { rate: 2.1, count: 430 },
    },
  ];

  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const countDown = setInterval(() => {
      let expTime = new Date("2024-02-01T11:22:54.882Z");
      let endTime = Date.parse(expTime.toString()) / 1000;

      let present = new Date();
      let now = Date.parse(present.toString()) / 1000;

      let timeLeft = endTime - now;

      let days = Math.floor(timeLeft / 86400);
      let hours = Math.floor((timeLeft - days * 86400) / 3600);
      let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      let seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < 10) {
        hours = parseInt("0" + hours.toString());
      }
      if (minutes < 10) {
        minutes = 0 + minutes;
      }
      if (seconds < 10) {
        seconds = parseInt("0" + seconds.toString());
      }

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    return () => clearInterval(countDown);
  }, []);

  return (
    <section className="w-full py-10 border-b">
      <div className="w-full mx-auto max-w-[1200px]">
        <div className="w-full flex justify-between items-center pb-5">
          <SectionTitle title="Deals Of The Day" />
          <p className="flex justify-center items-center cursor-pointer primary-text font-bold">
            All Deals
            <BiChevronRight className="rotate-[200]" />
          </p>
        </div>
        <div className="w-full grid grid-cols-4 gap-5 overflow-hidden">
          {data.map((deal) => (
            <div className="w-full h-[300px] flex flex-col  items-center  flex-shrink-0  rounded-lg  text-[10px] space-y-5 relative">
              <div className="w-full h-[150px] surface rounded-lg">
                {/* <img src="" alt="" /> */}
              </div>
              <div className="w-[200px] absolute top-10 flex flex-col justify-center items-center gap-2">
                <div className="w-full flex justify-between items-center primary-text font-bold">
                  <div className="w-[40px] h-[50px] rounded-md leading-tight flex flex-col justify-center items-center bg-white">
                    <p className="text-sm">
                      {days < -10 ? `0${days}` : `${days}`}
                    </p>
                    <p>days</p>
                  </div>
                  <div className="w-[40px] h-[50px] rounded-md leading-tight flex flex-col justify-center items-center bg-white">
                    <p className="text-sm">
                      {" "}
                      {hours < 10 ? `0${hours}` : `${hours}`}
                    </p>
                    <p>hours</p>
                  </div>
                  <div className="w-[40px] h-[50px] rounded-md leading-tight flex flex-col justify-center items-center bg-white">
                    <p className="text-sm">
                      {" "}
                      {minutes < 10 ? `0${minutes}` : `${minutes}`}
                    </p>
                    <p>minuites</p>
                  </div>
                  <div className="w-[40px] h-[50px] rounded-md leading-tight flex flex-col justify-center items-center bg-white">
                    <p className="text-sm">
                      {" "}
                      {seconds < 10 ? `0${seconds}` : `${seconds}`}
                    </p>
                    <p>seconds</p>
                  </div>
                </div>
                <div className="w-full shadow-md flex flex-col space-y-1 px-3 rounded-lg py-2 bg-white">
                  <p className="font-bold text-sm line-clamp-2 leading-tight">
                    {deal.title}
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
                    <strong className="font-bold primary-text">Myk Hub</strong>
                  </p>
                  <div className="w-full flex justify-between items-center ">
                    <p className="font-bold text-sm font-[poppins] primary-text">
                      ${deal.price}
                    </p>
                    <div className="flex justify-center items-center bg-[#5138ec]/20 px-3 py-1 gap-1 primary-text font-bold cursor-pointer rounded-sm ">
                      <BiCartAlt className="text-sm" />
                      <p>Add</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Deals;
