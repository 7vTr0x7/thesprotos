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
        <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 text-center text-gray-900 font-semibold h-48 flex justify-center items-center text-4xl">
          Fixtures
        </div>
        <div className="px-32 py-3 bg-black">
          <Breadcrumbs />
        </div>
        <div className="px-32 py-3 bg-black">
          <FixturesNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="px-32 py-3 bg-black">
          <RenderContent activeTab={activeTab} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Fixtures;
