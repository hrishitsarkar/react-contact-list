import { Link } from "react-router-dom";

const Navbar = ({ isVisible }) => {
  return (
    <nav className="bg-black h-[100px] flex items-center justify-between p-2 sm:p-5">
      <Link to="/">
        <h1 className="text-white text-xl sm:text-6xl">Contact List</h1>
      </Link>
      <Link to="/add">
        {isVisible && (
          <button className="bg-white mr-20 p-2 sm:mr-0 text-black rounded-lg">
            Add Contact
          </button>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
