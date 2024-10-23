import React from "react";
import Btn from "./Btn";
import { useNavigate } from "react-router-dom";

function Landingpage() {
  const navigate = useNavigate();
  const hendalRoutForEmp =  () => {
    navigate("empLogin");
  };
  const hendalRoutForAdmin = () => {
    navigate("adminLogin");
  };
  const hendleAbout = () =>{
    navigate("AboutUs")
  }
  return (
    <div className="flex flex-col h-screen bg-image">
      <div className="mt-80 mx-40">
        <h1 className="text-blue-900 mb-2 text-2xl text-center max-w-lg">
          Simplify Payroll Processing with Our Efficient Solutions!
        </h1>
        <div className="px-16">
          <Btn value="Employee LogIn" onClick={hendalRoutForEmp} />
          <Btn value="Admin LogIn" onClick={hendalRoutForAdmin} />
          <Btn value="About Us" onClick={hendleAbout} /> 
        </div>
      </div>
      
    </div>
  );
}

export default Landingpage;
