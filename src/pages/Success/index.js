import React from 'react'
import Header from 'components/Header'
import Breadcrumb from 'components/Breadcrumb'
import AsideMenu from 'components/AsideMenu'
import Footer from 'components/Footer'
import SuccessImage from 'assets/images/illustration-success.png'

const Success = () => {
  return (
    <>
      <Header theme="black" position="relative" />
      <Breadcrumb list={[
        {url: '/', name: 'Home'},
        {url: '/success', name: 'Success Checkout'},
      ]} />
      <section className="">
        <div className="container mx-auto min-h-screen">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full md:w-4/12 text-center">
              <img
                src={SuccessImage}
                alt="congrats illustration"
              />
              <h2 className="text-3xl font-semibold mb-6">Ah yes it’s success!</h2>
              <p className="text-lg mb-12">
                Furniture yang anda beli akan kami kirimkan saat ini juga so now
                please sit tight and be ready for it
              </p>
              <a
                href="details.html"
                className="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer"
              >
                Back to Shop
              </a>
            </div>
          </div>
        </div>
      </section>
      <AsideMenu />
      <Footer />
    </>
  )
}

export default Success
