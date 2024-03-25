import React from "react";
import DrawerCart from "../components/Drawer/Cart";
import useCart from "../components/Drawer/Cart/useCart";
import DrawerWishList from "../components/Drawer/Wishlist";
import useWishList from "../components/Drawer/Wishlist/useWishList";
import { DrawerCartContext } from "../contexts/drawerCartContext";
import Footer from "../parts/Footer";
import Header from "../parts/Header";

const Layout = ({ children }) => {
  const { isShowingCart, toggleDrawerCart } = useCart();
  const { isShowingWishList, toggleWishList } = useWishList();
  return (
    <DrawerCartContext.Provider value={{ isShowingCart, toggleDrawerCart }}>
      <Header buttonWishList={toggleWishList} />
      <main className="main-content">{children}</main>
      <Footer />
      <DrawerCart isShowing={isShowingCart} hide={toggleDrawerCart} />
      <DrawerWishList isShowing={isShowingWishList} hide={toggleWishList} />
    </DrawerCartContext.Provider>
  );
};

export default Layout;
