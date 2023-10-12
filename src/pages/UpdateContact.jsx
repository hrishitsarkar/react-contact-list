import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UpdateContact = ({ updateValue }) => {
  //state to store the contact which will get updated with initial value
  const [updatedContact, setUpdatedContact] = useState({
    name: updateValue.name,
    email: updateValue.email,
    phone: updateValue.phone,
  });
  //useNavigate hook
  const navigate = useNavigate();
  //creating shallow copy of the updatedContact object using spread operator and the value is set for the specified key "name"
  //setting the updatedContact state
  const handleChange = (e) => {
    setUpdatedContact({ ...updatedContact, [e.target.name]: e.target.value });
  };
  //function to update the contact
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      //doing put request with axios
      const { data } = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${updateValue.id}`,
        updatedContact
      );
      //logging the data
      console.log(data);
      //showing toast for successful update
      toast.success("Contact updated successfully");
      navigate("/");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="flex items-center flex-col justify-start w-[100%] h-screen">
      <h1 className="m-5">Update Contact</h1>
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
          value={updatedContact.name}
          required
        />
        <input
          className="m-5 p-3 border-black border rounded-lg"
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => handleChange(e)}
          value={updatedContact.email}
          required
        />
        <input
          className="m-5 p-3 border-black border rounded-lg"
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={(e) => handleChange(e)}
          value={updatedContact.phone}
          required
        />
        <button className="bg-black text-white">Update Contact</button>
      </form>
    </div>
  );
};

export default UpdateContact;
