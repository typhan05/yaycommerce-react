import React from "react";
import DrawerCart from "../components/Drawer/Cart";
import useCart from "../components/Drawer/Cart/useCart";
import DrawerWishList from "../components/Drawer/Wishlist";
import useWishList from "../components/Drawer/Wishlist/useWishList";
import Footer from "../parts/Footer";
import Header from "../parts/Header";

const Layout = ({ children }) => {
  const { isShowing, toggle } = useCart();
  const { isShowingWishList, toggleWishList } = useWishList();
  return (
    <>
      <Header buttonCart={toggle} buttonWishList={toggleWishList} />
      <main className="main-content">{children}</main>
      <Footer />
      <DrawerCart isShowing={isShowing} hide={toggle} />
      <DrawerWishList isShowing={isShowingWishList} hide={toggleWishList} />
    </>
  );
};

export default Layout;
