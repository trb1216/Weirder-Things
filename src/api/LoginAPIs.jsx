import React, { useState, useEffect } from "react";
const LOGIN_URL = "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT/users/login";

const LoginAPIs = (userLog) => {


  // const { userName, userPassword } 
  
  var token = "";

  const [ credentials, setCredentials ] = useState([]);
  
  const user = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${ token }`
    },
    body: JSON.stringify({
      user: {
        username: "test",
        password: "test",
      },
    }),
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submission:")
    console.log(e);
  };

  const checkCredentials = (e) => {
    console.log(e.target.value);
    setCredentials(e.target.value);
  };

useEffect( () => {
  fetch(LOGIN_URL, user)
    .then((res) => res.json())
    .then((res) => {
      token = res;
      console.log(res);
    })
    .catch(error => console.error(error));
  }, []
) 
return (<div><p>token</p></div>)
};
export default LoginAPIs;


