import React, {useState, useEffect} from "react";

const Register = ({authorized}) => {
  const [body, setBody] = useState([]);
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

  return (<div>
    <button type="button">
      register
    </button>
   <form onSubmit={(e) => {
          e.preventDefault();
          setBody(body);
        }}></form></div>
  );
};

export default Register;