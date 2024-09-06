import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import Axios from "../apis/Apis";
import AppConstants from "../AppConstants";

function Paginater() {
  const {
    filterBy,
    sortBy,
    selectedCategory,
    setCurrentPage,
    setProducts,
    totalPages,
    currentPage,
  } = useContext(AppContext);
  const [isLeftEnabled, setIsLeftEnabled] = useState(true);
  const [isRightEnabled, setIsRightEnabled] = useState(true);

  useEffect(() => {
    if (selectedCategory) {
      Axios.get(`/category/${selectedCategory}`, {
        params: {
          limit: 10,
          skip: (currentPage - 1) * 10,
          select: AppConstants.TITLES.join(","),
          ...(filterBy != "None" && { sortBy: filterBy }),
          ...(sortBy != "None" && { order: sortBy }),
        },
      }).then((res) => {
        const data = res.data;
        setProducts(data.products);
      });
    } else {
      Axios.get("/", {
        params: {
          limit: 10,
          skip: (currentPage - 1) * 10,
          select: AppConstants.TITLES.join(","),
          ...(filterBy != "None" && { sortBy: filterBy }),
          ...(sortBy != "None" && { order: sortBy }),
        },
      }).then((res) => {
        const data = res.data;
        setProducts(data.products);
      });
    }
  }, [currentPage]);

  useEffect(() => {
    if (currentPage == 1) {
      setIsLeftEnabled(false);
    } else {
      setIsLeftEnabled(true);
    }
    if (currentPage == totalPages) {
      setIsRightEnabled(false);
    } else {
      setIsRightEnabled(true);
    }
  }, [currentPage, totalPages]);

  return (
    <div className="fixed flex justify-center items-center w-full h-[40px] p-1 border-t-2 border-t-gray-200 shadow-[rgba(0,0,15,0.5)_0px_-10px_10px_0px] z-10">
      <div className="w-[100px] flex justify-between items-center h-full bg-white border-gray-500 shadow-md shadow-black border-[1px] p-2 rounded-full">
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={!isLeftEnabled}
          className={`${
            !isLeftEnabled
              ? "text-gray-400"
              : "text-black hover:text-blue-600 active:text-blue-400"
          }`}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <div>
          {currentPage}/{totalPages}
        </div>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={!isRightEnabled}
          className={`${
            !isRightEnabled
              ? "text-gray-400"
              : "text-black hover:text-blue-600 active:text-blue-400"
          }`}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
}

export default Paginater;
