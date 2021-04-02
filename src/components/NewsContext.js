import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { NEWS_API_KEY } from "../config";
import Search from "./Search";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const [category, setCategory]=useState("general");
  const [loadMore, setLoadMore] = useState(20);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${NEWS_API_KEY}&pageSize=${loadMore}`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [loadMore]);

  const search = searchValue => {
    

    axios .get(`https://newsapi.org/v2/top-headlines?q=${searchValue}&country=in&apiKey=${NEWS_API_KEY}`)
    .then((response) => setData(response.data))
    .catch((error) => console.log(error));
}
  

  return (
    
    <NewsContext.Provider value={{ data,setCategory }}>
      
      <Search search={search} />
      
      {props.children}
    </NewsContext.Provider>
  );
};