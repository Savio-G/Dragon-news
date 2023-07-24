import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="px-9">
      <h2 className="text-2xl font-semibold mb-5">Categories</h2>
      <div>
        {categories.map(category =>
          <p
            className=" mb-2 p-6 text-2xl"
            key={category.id}>
            <Link to={`/Category/${category.id}`}> {category.name}</Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default LeftNav;