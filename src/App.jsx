import "./App.css";  
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./Page/HomePage";
import HeadPage from "./Page/HeadPage"; 
import PillPage from "./Page/PillPage"; 
import UserPage from "./Page/UserPage"; 
import { Routes, Route } from "react-router-dom"; // Importing Routes and Route from react-router-dom
import CheckOutPage from "./Page/CheckOutPage"; 
import AboutPage from "./Page/AboutPage";

function App() { 

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div>
        <HeadPage /> 

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pill" element={<PillPage/>} />
          <Route path="/userform" element={<UserPage/>} /> 
          <Route path="/checkout" element={<CheckOutPage/>} />
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
