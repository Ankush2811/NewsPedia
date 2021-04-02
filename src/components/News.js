import React, { useContext } from "react";
import { NewsContext } from "./NewsContext";
import NewsArticle from "./NewsArticle";
import Spinner from "./Spinner"

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : <Spinner/>}
      </div>
    </div>
  );
}

export default News;