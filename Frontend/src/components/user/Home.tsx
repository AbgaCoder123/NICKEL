import BodyContainer from "../../resused-components/BodyContainer";
import BodyNav from "../../resused-components/BodyNav";
import CategoryCard from "../../resused-components/CategoryCard";
import Deals from "../../resused-components/Deals";
import Navbar from "../../resused-components/Navbar";
import MainContainer from "../../resused-components/MainContainer";
import NewProducts from "../../resused-components/NewProducts";
import PriceFilter from "../../resused-components/PriceFilter";
import Products from "../../resused-components/Products";
import SearchHeader from "../../resused-components/SearchHeader";
import SideNav from "../../resused-components/SideNav";
import Slide from "../../resused-components/Slide";
import Cart from "../../resused-components/Cart";
import { useState } from "react";
import SmallscreenNav from "../../resused-components/SmallscreenNav";
import DeliverHero from "../../resused-components/DeliverHero";
import Subscibesection from "../../resused-components/Subscibesection";
const Home = () => {
  const [OpenCart, setOpenCart] = useState(false);
  const [OpenSmallScreenNavigation, setOpenSmallScreenNavigation] =
    useState(false);
  return (
    <>
      <MainContainer className="flex flex-col w-full">
        <SmallscreenNav
          OpenSmallScreenNavigation={OpenSmallScreenNavigation}
          setOpenSmallScreenNavigation={setOpenSmallScreenNavigation}
        />
        <Cart OpenCart={OpenCart} setOpenCart={setOpenCart} />
        <SearchHeader setOpenCart={setOpenCart} />
        <Navbar setOpenSmallScreenNavigation={setOpenSmallScreenNavigation} />
        <Slide />
        <CategoryCard />
        <Products />
        <DeliverHero />
        <Deals />
        <BodyContainer>
          {/* <SideNav>
            <PriceFilter />
            <NewProducts />
          </SideNav> */}
        </BodyContainer>
        <Subscibesection />
      </MainContainer>
    </>
  );
};

export default Home;
