import React from 'react'
import Header from 'components/Header'
import Hero from 'components/Hero'
import BrowseTheRoom from 'components/BrowseTheRoom'
import JustArrived from 'components/JustArrived'
import Clients from 'components/Clients'
import AsideMenu from 'components/AsideMenu'
import Footer from 'components/Footer'
import useScrollAnchor from 'helpers/hooks/useScrollAnchor'
function Homepage() {
  useScrollAnchor();
  return (
    <>
      <Header theme="white" position="absolute"/>
      <Hero/>
      <BrowseTheRoom/>
      <JustArrived/>
      <Clients/>
      <AsideMenu/>
      <Footer/>
    </>
  )
}

export default Homepage
