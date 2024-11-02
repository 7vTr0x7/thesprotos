import React from "react";
import Header from "../../components/Header";
import Breadcrumbs from "../../components/Breadcrumbs";
import Footer from "../../components/Footer";

const News = () => {
  return (
    <>
      <Header />
      <>
        <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 text-center text-gray-900 font-semibold h-32 sm:h-48 flex justify-center items-center text-2xl sm:text-4xl">
          News
        </div>
        <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-3 bg-black">
          <Breadcrumbs />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-0 gap-4 px-4 sm:px-8 md:px-16 lg:px-32 pt-8 pb-20 bg-black"></div>
      </>
      <Footer />
    </>
  );
};

export default News;
