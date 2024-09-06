import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Category from "./Category";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function ListHeader() {
  const { setFilterBy, setSortBy, filterBy, sortBy, category } =
    useContext(AppContext);
  return (
    <>
      <div className="flex bg-white items-center gap-4 p-1 w-full overflow-x-scroll h-[15vh] no-scrollbar">
        {category.map((cat) => {
          return <Category category={cat} />;
        })}
      </div>
      <div className="bg-gradient-to-b from-white to-gray-200 p-1 flex justify-center items-center gap-10  shadow-black shadow-xl z-10 relative">
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="filter-by-label-pointer">Filter By</InputLabel>
          <Select
            labelId="filter-by-label-pointer"
            id="filter-by"
            value={filterBy}
            label="Filter By"
            onChange={(e) => setFilterBy(e.target.value)}
          >
            <MenuItem value="None" className=" italic">
              None
            </MenuItem>
            <MenuItem value={"title"}>Title</MenuItem>
            <MenuItem value={"price"}>Price</MenuItem>
            <MenuItem value={"rating"}>Rating</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="sort-by-label-pointer">Sort By</InputLabel>
          <Select
            labelId="sort-by-label-pointer"
            id="sort-by"
            value={sortBy}
            label="Sort By"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <MenuItem value="None" className=" italic">
              None
            </MenuItem>
            <MenuItem value={"asc"}>Ascending</MenuItem>
            <MenuItem value={"desc"}>Descending</MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
}

export default ListHeader;
