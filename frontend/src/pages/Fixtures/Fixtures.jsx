import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";

const Fixtures = () => {
  return (
    <>
      <Header />
      <div>
        <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 text-center text-brown-700 font-semibold py-4 h-36 flex justify-center items-center text-2xl">
          Fixtures
        </div>
        <div className="px-14 py-3 bg-black">
          <Breadcrumbs />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Fixtures;
