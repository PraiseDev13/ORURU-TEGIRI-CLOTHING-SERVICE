import FeaturedProducts from "../Component/FeaturedProducts.jsx";
import {Link} from 'react-router-dom'
function Home () {
    return (
        <>
        <div className="min-h-screen bg-[#f8f5ed]">
          {/* HERO SECTION */}
  <section
    className="relative mx-4 md:mx-5 min-h-[520px] md:min-h-[530px] flex items-center overflow-hidden bg-cover bg-center"
    style={{
      backgroundImage: "url( https://images.unsplash.com/photo-1603252109303-2751441dd157?w=900&q=85)",
    }}
  >

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#351a12]/85 via-[#542719]/45 to-[#351a12]/10"></div>

    {/* HERO CONTENT */}
    <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-10 py-20">

     

      <h1 className="font-serif text-[#fff8e9] text-5xl sm:text-6xl md:text-8xl leading-[1.05] max-w-2xl">
         ORURU TEGIRI <span className="italic"> CLOTHING</span> STORE
      </h1>

      <p className="text-[#f5eadb] text-sm md:text-base leading-7 max-w-md mt-7">
        Easy, natural-fabric pieces for every day.
        See something you love? Order it in one tap on WhatsApp.
      </p>

      <Link
        to="/shop"
        className="inline-flex items-center gap-3 mt-8 bg-[#f8f5ed] text-[#4b3a2d] px-7 py-4 text-sm font-medium hover:bg-[#e9dfcd] transition duration-300"
      >
        Shop the collection
        <span>→</span>
      </Link>

    </div>
  </section>

  {/* SHOP SECTION */}
  <section id="shop" className="max-w-6xl mx-auto px-6 py-24">

    <div className="border-t border-[#ded6c8] pt-10 text-center">

      <p className="text-xs tracking-[4px] text-[#a45b3c] mb-4">
        EXPLORE OUR COLLECTION
      </p>

      <h2 className="font-serif text-4xl md:text-5xl text-[#4b3a2d]">
        Made for everyday living.
      </h2>

      <p className="text-[#81776b] mt-5 max-w-lg mx-auto text-sm leading-7">
        Discover timeless fashion, beautiful textures and
        carefully selected pieces designed for everyday comfort.
      </p>

    </div>
 
  </section>

   <FeaturedProducts/>
 
   {/* FOOTER */}
      <footer className="bg-[#eee9df] py-10 text-center">

        <h2 className="font-serif text-2xl text-[#514438]">
          ORURU TEGIRI CLOTHING STORE
        </h2>

        <p className="text-sm text-[#82786d] mt-3">
          Timeless pieces. Everyday elegance.
        </p>

        <p className="text-xs text-[#82786d] mt-5">
          © 2026 ORURU TEGIRI CLOTHING STORE. All rights reserved.
        </p>

      </footer>

  
</div>


        </>
    )
}
export default Home