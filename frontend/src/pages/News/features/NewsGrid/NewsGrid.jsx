import NewsCard from "../NewsCard/NewsCard";

import data from "../../../../utils/newsData.json";

function NewsGrid() {
  const { latestNews } = data;
  return (
    <div className="bg-black w-full py-8">
      <div className="w-full px-4">
        <h1 className="text-white text-2xl font-bold mb-8">Latest News</h1>
        <div className="grid grid-cols-12 w-full  gap-6">
          {latestNews.map((news, index) => (
            <NewsCard
              key={index}
              index={index}
              title={news.title}
              image={news.image}
              link={news.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsGrid;
