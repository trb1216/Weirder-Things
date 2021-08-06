
import React, {useState, useEffect} from "react";

const Register = () => {
  const [body, setBody] = useState([]);
  const [ username, setUsername ] = useState([]);
  const [ password, setPassword ] = useState([]);

  const REG_URL =
  "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT/users/register";

const userRegister = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    user: {
      username: "test",
      password: "test",
    },
  }),
};
const haltMessages = async () => {
fetch(REG_URL, userRegister)
const res = await fetch(REG_URL, userRegister);
  const json = await res.json();

 console.log(json);
 setBody(json);
};
useEffect(() => {
  haltMessages();
   },[]);

const onFormSubmit = (event) => {
  event.preventDefault();
  console.log("Testing Form Submission")
    };

  //Login field, which will have to revisited with forms//
const updateUsername = (event) => setUsername(event.target.value);
const updatePassword = (event) => setPassword(event.target.value);

return (    
      <div className="inputContainer">
      <form onSubmit={onFormSubmit}>
      <label>REGISTER:</label>
      <input
        type="text"
        value={username}
        placeholder="Choose your ID"
        onChange={updateUsername}
      ></input>
      <input
        type="password"
        value={password}
        placeholder="Set Your Password"
        onChange={updatePassword}
      ></input>
      <button
        type="submit"
        onClick={console.log("need submission button here")}
        key={userRegister}
      >REGISTER
      </button>
      </form>
    </div>);
};

export default Register;


// //const stopOutOfControlMessages = async () => {
//   const res = await fetch(LOGIN_URL, userLogin);
//   const json = await res.json();

//   console.log(json);
//   setBody(json);
// };
// useEffect(() => {
// haltMessages();
// },[]);
// const passwordInput = (e) => {
//   console.log(e.target.value);
// }; //