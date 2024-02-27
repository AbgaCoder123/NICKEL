import { AiFillStar } from "react-icons/ai"; 
import SectionTitle from "./SectionTitle";

function NewProducts() {
  const New_Products = [
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
  ];
  return (
    <>
      <div className="p-5 rounded-lg bg-white shadow-lg w-[200px] flex flex-col gap-2 h-[300px] ">
        <SectionTitle
          title="New Products"
          additional_class="pb-2 border-b-2 border-gray-100"
          title_class=""
        />
        <div className="w-full flex flex-col gap-2">
          <div className="w-full p-1 ">
            All
          </div>
          <div className="w-full h-[250px] flex flex-col gap-1 overflow-scroll">
            {New_Products.map((product, index) => (
              <div
                className="full  p-2 flex gap-3 items-center   cursor-pointer"
                key={index}
              >
                <div className="w-[20px] h-[20px] flex-shrink-0">
                  <img src={product.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-2/3 ">
                  <p className=" font-bold text-ellipsis w-full whitespace-nowrap overflow-hidden">
                    {product.title}
                  </p>
                  <p className="text-[10px] font-bold">${product.price}</p>
                  <p className="text-[10px] flex justify-start items-center text-yellow-500">
                    <AiFillStar  />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default NewProducts;
