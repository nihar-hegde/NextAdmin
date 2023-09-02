import AllProducts from "@/components/cards/AllProducts";
import PageLinkCard from "@/components/cards/PageLinkCard";
import React from "react";

const DashBoard = () => {
  return <div className="h-screen flex flex-col justify-center items-center">
    <PageLinkCard/>
    <AllProducts/>
  </div>
};

export default DashBoard;
