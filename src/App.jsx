import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import AddContact from "./pages/AddContact";
import { Toaster } from "react-hot-toast";
import UpdateContact from "./pages/UpdateContact";
import { useState } from "react";
function App() {
  //state to store the value of the user object which will get updated
  const [updateValue, setUpdateValue] = useState(null);
  //add to contact button toggler
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <div className="">
        <Router>
          <Navbar isVisible={isVisible} />
          <Toaster />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  setUpdateValue={setUpdateValue}
                  setIsVisible={setIsVisible}
                />
              }
            />
            <Route
              path="/add"
              element={<AddContact setIsVisible={setIsVisible} />}
            />
            <Route
              path="/update"
              element={<UpdateContact updateValue={updateValue} />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
