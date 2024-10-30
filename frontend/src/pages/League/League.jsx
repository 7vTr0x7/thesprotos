import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const League = () => {
  return (
    <>
      <Header />
      <div>
        <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 text-center text-gray-900 font-semibold h-32 sm:h-48 flex justify-center items-center text-2xl sm:text-4xl">
          League
        </div>
      </div>
      <Footer />
    </>
  );
};

export default League;
