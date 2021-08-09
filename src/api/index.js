/* This is where the entire site's API Promises live  */

const URL = "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT";

//========== REGISTER  ========== //

// this ends up at Register.jsx for a register form //

export const createUser = async (username, password) => {
  const body = {
    user: {
      username,
      password,
    },
  };
  const fetchArgs = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  const res = await fetch(URL + "/users/register", fetchArgs);
  const json = await res.json();
  console.log(json);
  // json.data.token
  return json; // this leads to the return statement to be used with react //
};
// ==========   PROFILE  ==========  //

//This ends up at Profile.jsx for the User's info to see/change //

export const userInfo = async () => {
  const fetchArgsUser = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  };
  const res = await fetch(URL + "/users/me", fetchArgsUser);
  const json = await res.json();
  console.log(json);
  return json; // this leads to the return statement to be used with react //
};

// ==========   LOGIN ========== //

// This ends up at Login.jsx for the User to login //

export const userLogin = async (username, password) => {
  const body = {
    user: {
      username,
      password,
    },
  };
  const fetchArgs = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  const res = await fetch(URL + "/users/login", fetchArgs);
  const json = await res.json();
  console.log(json);
  return json; // this leads to the return statement to be used with react //
};

// ==========   POSTS  ==========  //

//  This ends up at Posts.jsx to post   //

export const userPost = async () => {
  const fetchArgsUser = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
    body: JSON.stringify(),
  };
  const res = await fetch(URL + "/posts", fetchArgsUser);
  const json = await res.json();
  console.log(json);
  return json; // this leads to the return statement to be used with react //
};
