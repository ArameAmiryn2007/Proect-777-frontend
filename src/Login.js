import './Login.css';
import App from './App';
import Create from './Create';
import {useState, useEffect} from "react"
import axios  from 'axios';

function Login(){
    const [mess, setMess] = useState(0)
    const [get, setGet] = useState(0)
    const [messag, setMessag] = useState("")
    const [login, setLogin] = useState({ login: "", password: "" });
    const [responseMessage, setResponseMessage] = useState("");  

    useEffect(() => {
        axios
          .get("http://localhost:5000/")
          .then((response) => setMessag(response.data))
          .catch((error) => console.error("Error fetching message:", error));
      }, []);

      const functionChange2 = (e) => {
        const { name, value } = e.target;
        setLogin({
          ...login,
          [name]: value,
        });
      };

    //   const sendFormData2 = async (e) => {
    //     e.preventDefault(); 
    //     console.log(login); 
      
    //     try {
    //       const response = await fetch("http://localhost:5000/login", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json", 
    //         },
    //         body: JSON.stringify(login),
    //       });
      
          
    //       const responseData = await response.json()
      
    //       if (response.ok) {
    //         setResponseMessage("User added successfully!");
    //       } else {
    //         setResponseMessage(responseData.message || "Error submitting form");
    //       }
    //     } catch (error) {
    //       setResponseMessage("Failed to submit form. Please try again later.");
    //       console.error("Error:", error);
    //     }
    //   };
      
    return(
        <div className="boxs">
            {messag}
            <p onClick={()=>{
              setGet(1)
            }}>X</p>
            {get?<App/>:console.log("error")}

           
            <div className="top">
                <div className="create">
                    <h2>Login</h2>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Login"
                        className="inp"
                        name="login"
                        required
                        onChange={functionChange2}
                        value={login.login}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="inp"
                        name="password"
                        required
                        onChange={functionChange2}
                        value={login.password}
                    />
                </div>
                <div className="nav"></div>
                <div className="text-p1">
                    <p
                        onClick={() => {
                            setMess(true);
                        }}
                    >
                        Create new account
                    </p>
                    {mess ? <Create /> : null}
                </div>
                <div className="submit">
                    <input type="submit" value="Login" />
                </div>
            </div>
        {responseMessage && <p>{responseMessage}</p>}
        </div>
    )
    
}
export default Login