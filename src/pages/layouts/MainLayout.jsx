import React from "react";
import ListHeader from "../../components/ListHeader";
import Listing from "../Listing";
import Paginater from "../../components/Paginater";

function MainLayout() {
  return (
    <div className="h-[100vh] bg-gray-200 transition-all">
      <ListHeader />
      <Listing />
      <Paginater />
    </div>
  );
}

export default MainLayout;
