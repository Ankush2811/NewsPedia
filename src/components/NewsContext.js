import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&country=us&country=de&country=ch&apiKey=e161d8a793fe4c97a892f8adadb447f5`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};