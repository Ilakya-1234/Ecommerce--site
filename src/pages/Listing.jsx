import React, { useContext, useEffect, useRef } from "react";
import Product from "../components/Product";
import { AppContext } from "../context/AppContext";

function Listing() {
  const scrollRef = useRef();
  const { products, selectedCategory, currentPage } = useContext(AppContext);

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, [selectedCategory, currentPage]);

  return (
    <div
      className="h-[70vh] w-full no-scrollbar overflow-scroll backdrop-blur-sm p-2"
      ref={scrollRef}
    >
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
}

export default Listing;
