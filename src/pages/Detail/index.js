import React from 'react'
import Header from 'components/Header'
// import Hero from 'components/Hero'
// import BrowseTheRoom from 'components/BrowseTheRoom'
import Breadcrumb from 'components/Breadcrumb'
import AsideMenu from 'components/AsideMenu'
import Footer from 'components/Footer'
function Detail() {
  return (
    <>
      <Header/>
      <Breadcrumb list={[
          {url: '/', name: 'Home'},
          {url: '/categories/123', name: 'Office Room'},
          {url: '/categories/123/products/1234', name: 'Details'},
      ]}/>
      <AsideMenu/>
      <Footer/>
    </>
  )
}

export default Detail
