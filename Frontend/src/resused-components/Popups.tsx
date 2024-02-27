import "../styles/popups.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import React, { useRef, useEffect } from "react";
import { PiCloudWarningFill } from "react-icons/pi";
import { TbFaceIdError } from "react-icons/tb";
import { TiInfoLarge } from "react-icons/ti";
import CustomButton from "./CustomButton";
import { AiOutlineCloseCircle } from "react-icons/ai";
interface Popuptype {
  popup_msg: string;
  popup_type: "success!" | "error!" | "warning!" | "info!" | string;
  btn_text: string;
  closebtn?: boolean;
  popup: boolean;
  className?:string;
  setpopup?: any;
  onclick_event?: (e: React.ChangeEvent<any>) => void;
}

const popup_properties = [
  {
    text: "success!",
    text_color: "text-green-500",
    btn_color: "!bg-green-500",
    icon: <IoMdCheckmarkCircleOutline />,
  },
  {
    text: "error!",
    text_color: "text-red-500",
    btn_color: "!bg-red-500",
    icon: <TbFaceIdError />,
  },
  {
    text: "warning!",
    text_color: "text-amber-500",
    btn_color: "!bg-amber-500",
    icon: <PiCloudWarningFill />,
  },
  {
    text: "info!",
    text_color: "text-sky-500",
    btn_color: "!bg-sky-500",
    icon: <TiInfoLarge />,
  },
];

function Popups({
  popup_msg,
  popup_type,
  btn_text,
  closebtn,
  className,
  onclick_event,
  popup,
  setpopup,
}: Popuptype) {
  const pop_container = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    pop_container.current?.classList.replace("popup_entrance", "popup_exit");
    setTimeout(() => {
      setpopup(!popup);
      document.body.classList.remove("overflow-hidden");
    }, 650);
  };
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
  }, []);
  return (
    popup && (
      <section className={`w-full h-screen fixed z-20 top-0 bottom-0 flex flex-col items-center justify-center ${className}`}>
        <div
          className={`w-full h-screen fixed top-0 bottom-0 bg-white/50 backdrop-blur-lg opacity-90 z-[-1] ${className}`}
          onClick={onclick_event ? undefined : handleClick}
        ></div>
        <div
          className={`max-w-[250px] min-h-[250px] w-full p-8 gap-2 rounded-2xl shadow-lg popup_entrance flex flex-col items-center background justify-between`}
          ref={pop_container}
        >
          {popup_properties.map((popup_property, i) =>
            popup_property.text === popup_type ? (
              <React.Fragment key={i}>
                <div className={`text-8xl ${popup_property.text_color}`}>
                  {popup_property.icon}
                </div>
                <div
                  className={`${popup_property.text_color} text-xl font-[poppins] font-bold uppercase`}
                >
                  {popup_type}
                </div>
                <div>
                  <p className="text-xs text-center surface_text">
                    {popup_msg}
                  </p>
                </div>
                <CustomButton
                  btn_text={btn_text}
                  className={`${popup_property.btn_color} w-full text-xs mt-2`}
                  type="button"
                  onclick_event={onclick_event ? onclick_event : handleClick}
                />
              </React.Fragment>
            ) : (
              ""
            )
          )}
        </div>
        <div
          className={`text-2xl cursor-pointer absolute bottom-[20%] ${
            closebtn ? "block" : "hidden"
          }`}
          onClick={handleClick}
        >
          <AiOutlineCloseCircle />
        </div>
      </section>
    )
  );
}

export default Popups;
