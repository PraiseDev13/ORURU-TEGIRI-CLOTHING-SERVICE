import React from "react";

import {Link} from 'react-router-dom'

const products = [
  {
    id: 1,
    category: "UNISEX",
    name: "Linen Relaxed Shirt",
    description: "Breathable washed linen, easy oversized fit.",
    price: "$68.00",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=900&q=85",
  },
  {
    id: 2,
    category: "WOMEN",
    name: "Camel Wool Overcoat",
    description: "Single-breasted, mid-length, wool blend.",
    price: "$220.00",
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=900&q=85",
  },
  {
    id: 3,
    category: "MEN",
    name: "Rust Knit Sweater",
    description: "Soft chunky knit in a warm autumn tone.",
    price: "$85.00",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=900&q=85",
  },
];

function FeaturedProducts() {
  const whatsappNumber = "2349119361695";

  const orderProduct = (product) => {
    const message = `Hello ORURU TEGIRI CLOTHING SERVICE, I am interested in ordering the ${product.name}.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#f8f6ef]">



      {/* FEATURED PRODUCTS */}
      <section id="shop" className="max-w-6xl mx-auto px-6 pt-12 pb-20">

        {/* SECTION HEADER */}
        <div className="flex items-end justify-between mb-12">

          <div>
            <p className="text-xs tracking-[4px] text-[#82786d] mb-3">
              FEATURED
            </p>

            <h1 className="font-serif text-4xl md:text-5xl text-[#514438]">
              This week's picks
            </h1>
          </div>

          <Link
          to="/shop"
            className="hidden sm:block text-xs tracking-[3px] text-[#514438] border-b border-[#514438] pb-2 hover:text-[#a45b3c] transition"
          >
            VIEW ALL
          </Link>

        </div>


        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {products.map((product) => (

            <div key={product.id} className="group">

              {/* IMAGE CONTAINER */}
              <div className="relative h-[380px] md:h-[430px] bg-[#eeeae1] overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                {/* CATEGORY */}
                <div className="absolute top-4 left-4 bg-[#f8f6ef]/90 px-3 py-2">
                  <span className="text-[10px] tracking-[3px] text-[#514438]">
                    {product.category}
                  </span>
                </div>

              </div>


              {/* PRODUCT DETAILS */}
              <div className="mt-4">

                <div className="flex justify-between items-start gap-3">

                  <h2 className="font-serif text-xl md:text-2xl text-[#514438]">
                    {product.name}
                  </h2>

                  <span className="text-sm font-medium text-[#514438] whitespace-nowrap">
                    {product.price}
                  </span>

                </div>

                <p className="text-sm text-[#82786d] mt-2">
                  {product.description}
                </p>


                {/* WHATSAPP BUTTON */}
                <button
                  onClick={() => orderProduct(product)}
                  className="w-full mt-5 bg-[#278354] hover:bg-[#1d6941] text-white py-3 flex items-center justify-center gap-3 text-sm transition duration-300"
                >

                  <span className="text-lg">◉</span>

                  Order on WhatsApp

                </button>

              </div>

            </div>

          ))}

        </div>


        {/* VIEW ALL MOBILE */}
        <div className="sm:hidden text-center mt-10">
          <Link
           to="/shop"
            className="text-xs tracking-[3px] border-b border-[#514438] pb-2"
          >
            VIEW ALL
          </Link>
        </div>

      </section>
      
    
        
    </div>
  );
}

export default FeaturedProducts;