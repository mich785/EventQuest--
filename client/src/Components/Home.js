import React,{useState,useEffect} from "react";
import LoginPage from "./LoginPage";
import "../Styles/home.css";
import SignUp from "./SignUp";

  function Home() {
    const [currentForm,setCurrentForm]= useState ('login');
    const [user, setUser] = useState(null);

    const toggleForm = (formName)=>(
      setCurrentForm(formName)
    )

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if(user){
    return (
      <div className="home-container">
        <h1>Welcome to EventQuest,{user.username}</h1>
      </div>
    );}
      else {
        return(
          <>
           <div className="home-container">
            <h1> Welcome to EventQuest</h1>
        {
          currentForm === 'login'? <LoginPage onLogin={setUser} onFormSwitch={toggleForm} /> :<SignUp onLogin={setUser} onFormSwitch={toggleForm}/>
        }
        </div>
        </>
      )
      }
  }

export default Home;
