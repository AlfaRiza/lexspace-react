import React from 'react'
import LogoAdobe from 'assets/images/logo-adobe.svg'
import LogoIkea from 'assets/images/logo-ikea.svg'
import LogoHermanMiller from 'assets/images/logo-hermanmiller.svg'
import LogoMiele from 'assets/images/logo-miele.svg'

function Clients() {
  return (
    <section class="container mx-auto">
      <div class="flex justify-center flex-wrap">
        <div
          class="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
        >
          <img src={LogoAdobe} alt="" class="mx-auto" />
        </div>
        <div
          class="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
        >
          <img src={LogoIkea} alt="" class="mx-auto" />
        </div>
        <div
          class="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
        >
          <img
            src={LogoHermanMiller}
            alt=""
            class="mx-auto"
          />
        </div>
        <div
          class="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
        >
          <img src={LogoMiele} alt="" class="mx-auto" />
        </div>
      </div>
    </section>
  )
}

export default Clients
