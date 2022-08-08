import React from "react"
import Header from "../parts/Header";
import Footer from "../parts/Footer";

const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout