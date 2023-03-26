import { Link } from "react-router-dom";

const HomepageContainer = () => {
  return (
    <div className="department-list">
      <ul>
        <Link to="/produce">
          <li className="homepage-produce">Produce </li>
        </Link>

        <Link to="/bakery">
          <li className="homepage-bakery">Bakery </li>
        </Link>

        <Link to="/dairy">
          <li className="homepage-dairy">Dairy </li>
        </Link>

        <Link to="/meats">
          <li className="homepage-meats">Meats </li>
        </Link>

        <Link to="/grocery">
          <li className="homepage-grocery">Grocery </li>
        </Link>

        <Link to="/alcohol">
          <li className="homepage-alcohol">Alcohol </li>
        </Link>
      </ul>
    </div>
  );
};

export default HomepageContainer;
