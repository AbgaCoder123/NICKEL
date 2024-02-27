type ButtonType = {
  className?: string;
  btn_text: string;
  icon?: JSX.Element;
  type?: "submit" | "reset" | "button" | undefined;
  buttonRef?: React.RefObject<HTMLButtonElement>;
  onclick_event?: (e: React.ChangeEvent<any>) => void;
};
function CustomButton({
  className,
  btn_text,
  icon,
  type = "submit",
  buttonRef,
  onclick_event,
}: ButtonType) {
  return (
    <button
      className={`p-3 h-[40px] focus:outline-none font-bold text-zinc-50 flex items-center justify-center gap-3 disabled:opacity-50 rounded-lg primary ${className}`}
      onClick={onclick_event}
      type={type}
      ref={buttonRef}
    >
      <div>{btn_text}</div>
      {icon && <div className="text-sm">{icon}</div>}
    </button>
  );
}

export default CustomButton;
