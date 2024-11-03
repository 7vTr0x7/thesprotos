import React from "react";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import { useLocation } from "react-router-dom";

const NewsDetails = () => {
  const location = useLocation();
  const { news } = location.state;

  return (
    <>
      <Header />
      <>
        <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 text-center text-gray-900 font-semibold h-28 sm:h-36 md:h-48 flex justify-center items-center text-2xl md:text-4xl">
          News
        </div>

        <div className="px-4 md:px-8 lg:px-16 py-3 bg-black">
          <Breadcrumbs />
        </div>

        <div className="px-4 md:px-56 text-gray-50  pt-10 pb-16 bg-black w-full">
          <p className="font-bold text-2xl ">{news.title}</p>
          <div className="flex justify-between text-sm mt-3 mb-5 text-gray-500">
            <p>{news.by}</p>
            <p>{news.date}</p>
          </div>
          <p className="text-lg">
            Discover the latest insights and stories at Trusir, where we feature
            guest blogs, PR articles, and event updates that spotlight our home
            tutoring services in Bihar. Stay connected with the educational
            community in Motihari and beyond.
          </p>
          <div>
            <img
              alt={news.title}
              src={news.image_url}
              className="w-full my-6 rounded-lg  h-full"
            />
          </div>
          <p className="mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </>
      <Footer />
    </>
  );
};

export default NewsDetails;
