import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData()
  const { thumbnail_url, category_id, title, details } = news
  return (

    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="h-1/3 w-full object-fill overflow-hidden rounded-t-lg " src={thumbnail_url} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{details}</p>

      </div>
      <Link to={`/Category/${category_id}`}> <button className="w-1/3 bg-red-600 text-white h-10">Go back to the category of this news</button></Link>
    </div>

  );
};

export default News;