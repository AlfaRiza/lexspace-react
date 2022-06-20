import React from 'react'
import Header from 'components/Header'
import Breadcrumb from 'components/Breadcrumb'
import AsideMenu from 'components/AsideMenu'
import Footer from 'components/Footer'
import ShoppingCart from 'parts/Cart/ShoppingCart'
import ShippingDetail from 'parts/Cart/ShippingDetail'

function Cart() {
    return (
        <>
            <Header theme="black" position="relative" />
            <Breadcrumb list={[
                {url: '/', name: 'Home'},
                {url: '/cart', name: 'Cart'},
            ]} />

            <section class="md:py-16">
                <div class="container mx-auto px-4">
                    <div class="flex -mx-4 flex-wrap">
                        

                        <ShoppingCart/>
                        <ShippingDetail/>
                    </div>
                </div>
            </section>

            <AsideMenu />
            <Footer />
        </>
    )
}

export default Cart
