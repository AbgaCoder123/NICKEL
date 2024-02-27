import { HiShoppingCart } from "react-icons/hi"; 
function Logo({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={className}>
    <HiShoppingCart />
    </div>
  );
}

export default Logo;
