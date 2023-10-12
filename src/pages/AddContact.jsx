import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddContact = ({ setIsVisible }) => {
  //state to store the contact to be added
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
  });
  //useNavigate Hook
  const navigate = useNavigate();
  //Toggling the add contact button while the app mounts
  useEffect(() => {
    setIsVisible(false);
  }, []);

  //creating shallow copy of the contact object using spread operator and the value is set for the specified key "name"
  //setting the contact state
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  //on add contact button this function gets triggered
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      //doing a post request using axios
      const { data } = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        contact
      );
      //logging the response data
      console.log("data", data);
      //success toast
      toast.success("Contact added successfully");
      //navigating to home
      navigate("/");
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className="flex items-center flex-col justify-start w-[100%] h-screen">
      <h1 className="m-5">Add a Contact</h1>
      <form
        className="border-black border rounded-lg p-10 flex items-center justify-between flex-col mt-[50px]"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          className="m-5 p-3 border-black border rounded-lg"
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          className="m-5 p-3 border-black border rounded-lg"
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          className="m-5 p-3 border-black border rounded-lg"
          type="number"
          name="phone"
          placeholder="Phone"
          onChange={(e) => handleChange(e)}
          required
        />
        <button type="submit" className="bg-black text-white">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default AddContact;
