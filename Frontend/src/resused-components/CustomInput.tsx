
import { useRef } from "react";

type CustomInputType = {
  className?: string;
  placeholder?: string;
  input_type: string;
  icon?: JSX.Element;
  value: string | number;
  name: string;
  onchange_event?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
function CustomInput({
  className,
  icon,
  input_type,
  name,
  value,
  onchange_event,
  placeholder,
}: CustomInputType) {
  const input_holder = useRef<HTMLDivElement>(null);
  const icon_holder = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFocus = () => {
    input_holder.current?.classList.add(
      "border",
      "primary-border",
      "ring",
      "ring-+"
    );
    icon_holder.current!.className = "primary-text";
  };
  const handleBlur = () => {
    input_holder.current?.classList.remove(
      "border",
      "primary-border",
      "ring",
      "ring-[#5138ec]/30"
    );
    icon_holder.current!.className = "surface-text";
  };
  const handleIconClick = () => {
    const input = inputRef.current;
    if (input?.type === "password") {
      input.type = "text";
    } else {
      input!.type = "password";
    }
  };

  return (
    <div className="w-full relative">
      <div
        ref={input_holder}
        className={`p-3 h-[40px] w-full rounded-lg surface flex items-center justify-center flex-col ${
          className || ""
        }`}
      >
        <div className="focus:outline-none bg-transparent border-0 flex w-full items-center">
          <input
            type={input_type}
            className="w-full px-2 focus:outline-none text-black bg-transparent border-0"
            placeholder={placeholder}
            defaultValue={value}
            name={name}
            onChange={onchange_event}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={inputRef}
          />
          <div
            className="surface-text"
            ref={icon_holder}
            onClick={handleIconClick}
          >
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomInput;
