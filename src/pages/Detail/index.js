import React from 'react'
import Header from 'components/Header'
// import Hero from 'components/Hero'
import ProductDetail from 'parts/Detail/ProductDetail'
import Breadcrumb from 'components/Breadcrumb'
import AsideMenu from 'components/AsideMenu'
import Footer from 'components/Footer'
import Suggestion from 'parts/Detail/Suggestion'
function Detail() {
  return (
    <>
      <Header theme="black" position="relative"/>
      <Breadcrumb list={[
          {url: '/', name: 'Home'},
          {url: '/categories/123', name: 'Office Room'},
          {url: '/categories/123/products/1234', name: 'Details'},
      ]}/>
      <ProductDetail/>
      <Suggestion/>
      <AsideMenu/>
      <Footer/>
    </>
  )
}

export default Detail
