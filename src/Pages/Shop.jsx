import React, { useState } from "react";

// PRODUCT DATA
const products = [
  {
    id: 1,
    name: "Linen Relaxed Shirt",
    category: "Unisex",
    description: "Breathable washed linen, easy oversized fit.",
    price: 68,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800",
  },
  {
    id: 2,
    name: "Camel Wool Overcoat",
    category: "Women",
    description: "Single-breasted, mid-length, wool blend.",
    price: 220,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800",
  },
  {
    id: 3,
    name: "Rust Knit Sweater",
    category: "Men",
    description: "Soft chunky knit in a warm autumn tone.",
    price: 85,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800",
  },
  {
    id: 4,
    name: "Classic Beige Jacket",
    category: "Women",
    description: "A timeless jacket for everyday elegance.",
    price: 145,
    image: "https://images.unsplash.com/photo-1548624149-f3221a6e2d6b?w=800",
  },
  {
    id: 5,
    name: "Casual Cotton Shirt",
    category: "Men",
    description: "Comfortable cotton with a relaxed finish.",
    price: 75,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800",
  },
  {
    id: 6,
    name: "Everyday Linen Top",
    category: "Unisex",
    description: "Lightweight fabric for effortless styling.",
    price: 55,
    image: "https://images.unsplash.com/photo-1564257577-1d5e7c5c7d1c?w=800",
  },
];

const categories = ["All", "Women", "Men", "Unisex"];

// SHOP COMPONENT
function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");

  const whatsappNumber = "2349119361695";

  // FILTER PRODUCTS
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  // WHATSAPP ORDER
  const handleOrder = (product) => {
    const message = `Hello ORURU TEGIRI CLOTHING SERVICE, I am interested in ordering ${product.name}. Price: $${product.price}.`;

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#f8f6ef]">

      

      {/* SHOP HEADER */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 pt-14 pb-12">

        <p className="text-[11px] tracking-[4px] text-[#8a8073] mb-4">
          THE COLLECTION
        </p>

        <h1 className="font-serif text-6xl md:text-7xl text-[#514438]">
          Shop
        </h1>

        <p className="text-[#82786d] text-base md:text-lg leading-7 max-w-xl mt-5">
          Every piece can be ordered directly on WhatsApp — just
          tap the green button under the item you like.
        </p>

      </section>

      {/* CATEGORY FILTER */}
      <section className="max-w-6xl mx-auto px-6 md:px-8">

        <div className="border-t border-[#e4ded3] pt-7 pb-10">

          <div className="flex flex-wrap items-center justify-between gap-5">

            <div className="flex flex-wrap gap-3">

              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-3 rounded-full text-[11px] tracking-[3px] border transition duration-300 ${
                    activeCategory === category
                      ? "bg-[#514438] text-white border-[#514438]"
                      : "bg-transparent text-[#71685e] border-[#ded7ca] hover:border-[#514438]"
                  }`}
                >
                  {category.toUpperCase()}
                </button>
              ))}

            </div>

            <p className="text-sm text-[#82786d]">
              {filteredProducts.length} items
            </p>

          </div>

        </div>

      </section>

      {/* PRODUCT GRID */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 pb-24">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">

          {filteredProducts.map((product) => (
            <div key={product.id} className="group">

              {/* PRODUCT IMAGE */}
              <div className="relative h-[400px] md:h-[420px] bg-[#eeeae1] overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                <span className="absolute top-5 left-5 bg-[#f8f6ef]/90 px-4 py-2 text-[10px] tracking-[3px] text-[#514438]">
                  {product.category.toUpperCase()}
                </span>

              </div>

              {/* PRODUCT DETAILS */}
              <div className="pt-4">

                <div className="flex justify-between items-start gap-3">

                  <h2 className="font-serif text-xl md:text-2xl text-[#514438]">
                    {product.name}
                  </h2>

                  <span className="text-sm font-medium text-[#514438] whitespace-nowrap">
                    ${product.price.toFixed(2)}
                  </span>

                </div>

                <p className="text-sm text-[#82786d] mt-2 leading-6">
                  {product.description}
                </p>

                {/* ORDER BUTTON */}
                <button
                  onClick={() => handleOrder(product)}
                  className="w-full mt-5 bg-[#278354] hover:bg-[#1e6842] text-white py-3.5 flex items-center justify-center gap-3 text-sm transition duration-300"
                >
                  <span className="text-lg">◉</span>
                  Order on WhatsApp
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

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
  );
}

export default Shop;