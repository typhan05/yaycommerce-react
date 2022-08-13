import React from "react"
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import DrawerCart from "../components/Drawer/Cart";
import useCart from "../components/Drawer/Cart/useCart";

const Layout = ({children}) => {
  const {isShowing, toggle} = useCart();
  return (
    <>
      <Header buttonCart={toggle} />
      <main className="main-content">
        {children}
      </main>
      <Footer/>
      <DrawerCart isShowing={isShowing} hide={toggle} />
    </>
  )
}

export default Layout