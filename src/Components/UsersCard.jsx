import { BiEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const UserCard = ({ user, setUpdateValue, handleDelete }) => {
  return (
    <div className="flex px-2 border items-center flex-wrap justify-between w-[90%]  h-[100px] m-5 shadow-lg hover:scale-[1.1] transition-all">
      <h1 className="text-xs sm:text-2xl w-[25%] overflow-visible">
        {user.name}
      </h1>
      <h1 className="text-xs sm:text-2xl w-[25%] overflow-hidden">
        {user.email}
      </h1>
      <h1 className="text-xs sm:text-2xl w-[25%] overflow-hidden">
        {user.phone}
      </h1>
      <div className=" flex items-center p-2 w-[25%]">
        <Link to="/update">
          <BiEditAlt
            className="text-xl sm:text-4xl m-1 sm:m-2 cursor-pointer"
            onClick={() => setUpdateValue(user)}
          />
        </Link>
        <AiFillDelete
          className="text-xl sm:text-4xl m-1 sm:m-2 text-red-600 cursor-pointer"
          onClick={() => {
            handleDelete(user.id);
          }}
        />
      </div>
    </div>
  );
};

export default UserCard;
