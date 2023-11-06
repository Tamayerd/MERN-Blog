import React from 'react'
import Header from './Header'
import Footer from './Footer'

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default MainLayout
