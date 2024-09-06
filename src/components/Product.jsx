import React from "react";

function Product({ product }) {
  const discountValue = Math.round(parseInt(product.discountPercentage));
  const originalPrice = product.price;

  function calculateDiscountedPrice() {
    let totalValue = originalPrice * ((100 - product.discountPercentage) / 100);
    return totalValue.toFixed(2);
  }

  return (
    <div className="flex flex-col md:flex-row min-h-[500px] max-h-[700px] md:min-h-[200px] md:max-h-[400px] bg-white m-5 p-5 gap-5 rounded-xl  border-[1px] border-black shadow-md shadow-black hover:shadow-black hover:shadow-lg hover:scale-[1.02] transition-all hover:bg-slate-200">
      <div className="relative flex justify-center items-center h-full flex-shrink-0 overflow-hidden">
        <div
          style={{
            backgroundImage: `url(${product.thumbnail})`,
            backgroundSize: "cover",
            width: "200px",
            height: "200px",
          }}
        ></div>
        {/* <img src={product.thumbnail} height={"250px"} width={"250px"} /> */}
        {!!discountValue && (
          <p className="absolute bg-red-700 text-white rounded-full h-[40px] w-[40px] flex items-center self-start justify-center right-0">
            <p className="flex font-bold">{discountValue}%</p>
          </p>
        )}
      </div>
      <div className="flex flex-col h-auto">
        <div className="flex flex-col h-full flex-1">
          <h1 className=" font-bold text-lg">{product.title}</h1>
          <h3 className="flex-1 text-justify">{product.description}</h3>
        </div>
        <div className=" font-medium text-base italic">{product.brand}</div>
        <div className="bg-yellow-500 p-1 rounded-md text-white font-bold w-[100px] text-center">
          {product.rating.toFixed(1)}/5
        </div>
        {product.availabilityStatus == "Low Stock" && (
          <div className="mt-1 mb-1">
            <p className=" italic">Only {product.stock} stock available</p>
            <div className="font-semibold w-[150px] bg-red-500 text-white p-1 text-center">
              Order Soon!!!
            </div>
          </div>
        )}
        <div className="flex">
          {discountValue ? (
            <h5 className="flex gap-3 items-end mt-2">
              <del className="font-normal">Rs.{product.price}/-</del>
              <p className="font-semibold text-2xl">
                Rs.{calculateDiscountedPrice()}/-
              </p>
            </h5>
          ) : (
            <h5 className="font-semibold text-2xl mt-2">
              Rs.{product.price.toFixed(2)}/-
            </h5>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
