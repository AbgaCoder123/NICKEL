import SectionTitle from "./SectionTitle";

function CategoryCard() {
  const categories = [
    {
      title: "Shoes",
      img_path: "/public/a2080d56528139dc3023205b098f5b3c.jpg",
    },
    {
      title: "Clothings",
      img_path: "/public/3ba2729e75a5f9f253a09f4e6841104d.jpg",
    },
    {
      title: "Jewelries",
      img_path: "/public/300506e7472b8ec5be09ff98aedd832c.jpg",
    },
    {
      title: "Bags",
      img_path: "/public/9316d386990c0361b2b2fac5092fcb27.jpg",
    },
    {
      title: "Accessories",
      img_path: "/public/acdf7eb60e5d72b8120be562ddf474b0.jpg",
    },
  ];
  return (
    <>
    <section className="border-b w-full max-sm:px-5">
       <div className="max-w-[1200px] w-full items-center mx-auto py-10">
        <div className="flex justify-between items-center w-full pb-5">
          <SectionTitle title={`Shop by Categories`} />
        </div>
        <div className="w-full grid grid-cols-5 gap-5 max-sm:grid-cols-2 font-[poppins]">
          {categories.map((category, index) => (
            <div
              className="w-full items-center justify-center h-[200px] max-sm:h-[150px] rounded-lg !bg-no-repeat !bg-cover relative overflow-hidden" key={index}
              style={{
                background: `url(${category.img_path})`,
              }}
            >
              <div className="w-full absolute bg-gradient-to-t flex items-end p-5 justify-center from-[#5138ec]/80 h-full">
                <p className="text-xl text-white font-bold">{category.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
     
    </>
  );
}

export default CategoryCard;
