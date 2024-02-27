import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";

function PriceFilter() {
  const [percentage, setPercentage] = useState(0);
  const [Value, setValue] = useState(0);
  const [Color, setColor] = useState<string[]>([]);

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    const newPercentage =
      ((value - parseInt(event.target.min)) /
        (parseInt(event.target.max) - parseInt(event.target.min))) *
      100;
    setPercentage(newPercentage);
    setValue(value);
    console.log(value);
  };

  const thumbStyle = {
    background: `linear-gradient(to right, #5138ec ${percentage}%, #fff ${percentage}%)`,
  };

  const handleColorSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (event.target.checked) {
      setColor((arr) => [...arr, value]);
    } else {
      const fill = Color.filter((color) => color !== value);
      setColor(() => fill);
    }
  };

  const colors = [
    "Red",
    "Indigo",
    "Violet",
    "Violet",
    "Violet",
    "Violet",
    "Violet",
  ];


  return (
    <>
      <div className="p-5 rounded-lg  w-full bg-white shadow-lg flex flex-col gap-2 h-fit">
        <SectionTitle
          title="Filter By Price"
          additional_class="pb-2 border-b-2 border-gray-100"
          title_class=""
        />
        <div className="w-full flex flex-col gap-1">
          <input
            type="range"
            name="range"
            id="range"
            min={0}
            max={20000}
            className="w-full h-1 outline-none border-none slider"
            onChange={handleRangeChange}
            style={thumbStyle}
          />
        </div>
        <div className="w-full flex justify-between">
          <p>{Value}</p>
          <p>20000</p>
        </div>
        <div className="w-full flex flex-col justify-start items-start">
          <SectionTitle
            subtitle="Color"
            additional_class="pb-3"
            subtitle_class="font-bold text-[14px]"
          />
          <div className="w-full flex flex-col overflow-scroll h-[150px] gap-3">
            {colors.map((color, index) => (
              <div className="w-full flex items-center gap-2" key={index}>
                <input
                  type="checkbox"
                  name="colorcheck"
                  id=""
                  className=" text-red-600 h-3 w-3 bg-red-600 checked:bg-red-500"
                  value={color}
                  onChange={handleColorSelection}
                />
                {color}
              </div>
            ))}
          </div>
        </div>
        {/* <div className="w-full flex flex-col justify-start items-center">
          <SectionsTitle
            subtitle="Items Collection "
            additional_class="w-full flex-shrink-0"
            subtitle_class="font-bold text-[14px]"
          />
          <div className="w-full flex justify-start items-center gap-3">
            <div className="w-[30px] h-[20px] rounded-md flex justify-center items-center primary text-white">
              AI
            </div>
            <div className="w-[30px] h-[20px] rounded-md flex justify-center items-center ">
              AI
            </div>
            <div className="w-[30px] h-[20px] rounded-md flex justify-center items-center ">
              AI
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default PriceFilter;
