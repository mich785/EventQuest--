import React,{useState} from "react";
import LoginPage from "./LoginPage";
import "../Styles/home.css";
import SignUp from "./SignUp";

  function Home() {
    const [currentForm,setCurrentForm]= useState ('login');

    const toggleForm = (formName)=>(
      setCurrentForm(formName)
    )

    return (
      <div className="home-container">
        <h1>Welcome to EventQuest</h1>
        {
          currentForm === 'login'? <LoginPage onFormSwitch={toggleForm} /> :<SignUp onFormSwitch={toggleForm}/>
        }
      </div>
    );
  }

export default Home;
