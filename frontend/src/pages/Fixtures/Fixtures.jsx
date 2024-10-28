import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import FixturesNav from "./features/FixturesNav/FixturesNav";
import RenderContent from "./features/RenderContent/RenderContent";

const Fixtures = () => {
  const [activeTab, setActiveTab] = useState("fixtures");

  return (
    <>
      <Header />
      <div>
        <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 text-center text-gray-900 font-semibold h-32 sm:h-48 flex justify-center items-center text-2xl sm:text-4xl">
          Fixtures
        </div>
        <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-3 bg-black">
          <Breadcrumbs />
        </div>
        <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-3 bg-black">
          <FixturesNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-3 bg-black">
          <RenderContent activeTab={activeTab} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Fixtures;
