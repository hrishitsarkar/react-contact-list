import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "../Components/UsersCard";
import toast from "react-hot-toast";

const Home = ({ setUpdateValue, setIsVisible }) => {
  //state to store the users fetched from api
  const [users, setUsers] = useState([]);
  //getting the users while the app mounts
  useEffect(() => {
    //add to contact button toggler
    setIsVisible(true);
    //fetching users by doing get request with axios
    const getUsers = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      //storing the users inside state
      setUsers(data);
    };
    //calling the function
    getUsers();
  }, []);

  //function to delete a contact
  const handleDelete = async (id) => {
    try {
      //doing delete request with axios in specified id
      const { data } = await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      //logging the data
      console.log(data);
      //showing toast for successful deletion
      toast.success("Contact deleted successfully");
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <>
      <div className="p-5  sm:visible w-[100%] flex flex-col items-center justify-between flex-wrap">
        <div className="flex px-2 bg-blue-500 text-white  border items-center flex-wrap justify-between w-[90%] h-[100px] m-5 shadow-lg">
          <h1 className="text-lg sm:text-2xl w-[25%]">Name</h1>
          <h1 className="text-lg sm:text-2xl w-[25%]">Email</h1>
          <h1 className="text-lg sm:text-2xl w-[25%]">Phone</h1>
          <h1 className="text-lg sm:text-2xl w-[25%]">Actions</h1>
        </div>
        {users.map((user) => (
          <UserCard
            setUpdateValue={setUpdateValue}
            key={user.id}
            user={user}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
