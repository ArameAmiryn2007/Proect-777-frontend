import "./Create.css";
import Login from "./Login";
import axios from "axios";
import {useState, useEffect} from "react"
import User from "./User";

function Create() {
  const [arr, setArr] = useState();
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [user,setUser] = useState(0)
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((response) => setMessage(response.data))
      .catch((error) => console.error("Error fetching message:", error));
  }, []);

  const functionChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const sendFormData = async (e) => {
    e.preventDefault(); 
    console.log(formData); 
  
    try {
      const response = await fetch("http://localhost:5000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(formData),
      });
  
      
      const responseData = await response.json()
  
      if (response.ok) {
        setResponseMessage("User added successfully!");
      } else {
        setResponseMessage(responseData.message || "Error submitting form");
      }
    } catch (error) {
      setResponseMessage("Failed to submit form. Please try again later.");
      console.error("Error:", error);
    }
  };
  

  return (
    <div className="nav-row">
      {message}
      <p
        onClick={() => {
          setArr(1);
        }}
      >
        X
      </p>
      {arr ? <Login /> : null}
      <div className="creat-nav">
        <div className="account">
          <h2>Create a new account</h2>
        </div>
        <form onSubmit={sendFormData}>
          <div className="inp-cret">
            <input
              type="email"
              placeholder="Email"
              className="inp"
              onChange={functionChange}
              required
              name="email"
              value={formData.email}
            />
            <input
              type="text"
              placeholder="Name"
              className="inp"
              onChange={functionChange}
              required
              name="name"
              value={formData.name}
            />
            <input
              type="password"
              placeholder="Password"
              className="inp"
              onChange={functionChange}
              required
              name="password"
              value={formData.password}
            />
          </div>
          <div className="submit2" onClick={()=>{
            setUser(1)
          }}>
              {user ? <User/> : null}
            <input type="submit" value="Submit" />
          </div>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </div>
  );
}

export default Create;
