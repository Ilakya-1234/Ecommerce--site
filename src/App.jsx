import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Axios from "./apis/Apis";
import AppConstants from "./AppConstants";
import MainLayout from "./pages/layouts/MainLayout";

function App() {
  const {
    resetPages,
    setTotalPages,
    selectedCategory,
    setCategory,
    setProducts,
    filterBy,
    sortBy,
    resetFilter,
  } = useContext(AppContext);
  useEffect(() => {
    Axios.get("/category-list").then((res) => {
      const data = res.data;
      setCategory(data);
    });
  }, []);
  useEffect(() => {
    if (selectedCategory) {
      Axios
        .get(`/category/${selectedCategory}`, {
          params: {
            limit: 10,
            skip: 0,
            select: AppConstants.TITLES.join(","),
            ...(filterBy != "None" && { sortBy: filterBy }),
            ...(sortBy != "None" && { order: sortBy }),
          },
        })
        .then((res) => {
          const data = res.data;
          setProducts(data.products);
          let totalCount = data.total;
          if (totalCount % 10 == 0) {
            setTotalPages(parseInt(totalCount / 10));
          } else {
            setTotalPages(parseInt(data.total / 10) + 1);
          }
        });
    } else {
      Axios
        .get("/", {
          params: {
            limit: 10,
            skip: 0,
            select: AppConstants.TITLES.join(","),
            ...(filterBy != "None" && { sortBy: filterBy }),
            ...(sortBy != "None" && { order: sortBy }),
          },
        })
        .then((res) => {
          const data = res.data;
          setProducts(data.products);
          let totalCount = data.total;
          if (totalCount % 10 == 0) {
            setTotalPages(parseInt(totalCount / 10));
          } else {
            setTotalPages(parseInt(data.total / 10) + 1);
          }
        });
    }
  }, [selectedCategory, filterBy, sortBy]);

  useEffect(() => {
    resetFilter();
    resetPages();
  }, [selectedCategory]);

  return <MainLayout />;
}

export default App;
