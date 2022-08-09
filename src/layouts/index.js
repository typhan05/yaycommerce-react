import React from "react"
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import PreFooter from "../blocks/pre-footer";

const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <main className="main-content">
        {children}
      </main>
      <PreFooter />
      <Footer />
    </>
  )
}

export default Layout