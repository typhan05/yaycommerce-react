import React from "react"
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import DrawerCart from "../components/Drawer/Cart";
import useCart from "../components/Drawer/Cart/useCart";
import DrawerSearch from "../components/Drawer/Search";
import useSearch from "../components/Drawer/Search/useSearch";

const Layout = ({children}) => {
  const {isSearchShowing, toggleSearch} = useSearch();
  const {isShowing, toggle} = useCart();
  return (
    <>
      <Header buttonSearch={toggleSearch} buttonCart={toggle} />
      <main className="main-content">
        {children}
      </main>
      <Footer/>
      <DrawerSearch isSearchShowing={isSearchShowing} hide={toggleSearch} />
      <DrawerCart isShowing={isShowing} hide={toggle} />
    </>
  )
}

export default Layout