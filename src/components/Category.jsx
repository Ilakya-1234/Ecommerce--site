import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";


function Category({ category }) {
  const { setSelectedCategory, selectedCategory } = useContext(AppContext);
  function onSelection() {
    if (selectedCategory == category) {
      setSelectedCategory("");
      return;
    }
    setSelectedCategory(category);
  }
  function capitalize() {
    const catTitle = category
      .split("-")
      .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
      .join(" ");
    return catTitle;
  }
  return (
    <div
      className={`flex flex-col items-center self-end justify-center p-2 h-[135px] hover:cursor-pointer rounded-lg active:bg-gray-200 active:text-white hover:scale-[1.02] transition-allz ${
        category == selectedCategory ? "bg-black text-white" : ""
      } hover:bg-gray-400`}
    >
      <div
        style={{
          backgroundImage: `url("src/assets/${category}.png")`,
          backgroundSize: "cover",
        }}
        className="w-20 h-20 rounded-full"
        onClick={onSelection}
      ></div>
      <h1 className=" text-center text-sm font-extrabold">{capitalize()}</h1>
    </div>
  );
}

export default Category;
