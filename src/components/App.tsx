import ProdDesk from '../assets/images/image-product-desktop.jpg'
import ProdMob from '../assets/images/image-product-mobile.jpg'
import Cart from '../assets/images/icon-cart.svg'

function App() {
  return (
    <div className="grid h-screen w-full place-content-center bg-cream">
      <div className="mx-6 overflow-hidden rounded-xl md:flex md:max-h-image md:max-w-4xl md:justify-center">
        <section className="md:w-1/2">
          <picture>
            <source media="(min-width:768px)" srcSet={ProdDesk} />
            <img className="h-full w-full" src={ProdMob} alt="chanel perfume" />
          </picture>
        </section>
        <section className="bg-white font-montserrat font-medium text-grayishBlue md:w-1/2">
          <div className="space-y-5 px-7 py-7 md:flex md:h-full md:flex-col md:justify-around md:space-y-0 md:px-13">
            <span className="text-lg uppercase tracking-xl">Perfume</span>
            <h1 className="font-fraunces text-title font-bold leading-none text-darkBlue md:text-5xl">
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="text-paragraph leading-8 md:text-xl">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="flex items-center">
              <h1 className="font-fraunces text-title font-bold text-darkCyan">
                $149.99
              </h1>
              <span className="ml-7 text-xl line-through">$169.99</span>
            </div>
            <button className="mx-auto flex w-full items-center justify-center rounded-lg bg-darkCyan py-5 text-xl font-bold text-white">
              <img className="mr-4 h-6" src={Cart} alt="cart icon" />
              Add to Cart
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
