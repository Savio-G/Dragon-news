import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { thumbnail_url, image_url, _id, title, author, details } = news
  return (

    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={image_url} alt="" />

      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{details.length < 250 ? <>{details}</>
          :
          <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read more</Link></>
        }</p>

      </div>
    </div>

  );
};

export default NewsCard;