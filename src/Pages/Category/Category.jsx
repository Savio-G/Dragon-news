import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../News/NewsCard";


const Category = () => {
  const { id } = useParams()
  const loadedData = useLoaderData()
  console.log(loadedData)


  return (
    <div>
      {
        loadedData.map(news => <NewsCard
          key={news._id}
          news={news}
        ></NewsCard>)
      }
    </div>
  );
};

export default Category;