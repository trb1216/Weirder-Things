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

export const userInfo = async (userToken) => {
  const fetchArgsUser = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };
  await fetch(URL + "/users/me", fetchArgsUser)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result.data;
    })
    .catch(console.error);
  // this leads to the return statement to be used with react //
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

export const userPost = async (
  userToken,
  title,
  description,
  price,
  willDeliver
) => {
  const body = {
    post: {
      title,
      description,
      price,
      willDeliver,
    },
  };

  const fetchArgsUser = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
    body: JSON.stringify(body),
  };
  const res = await fetch(URL + "/posts", fetchArgsUser);
  const json = await res.json();
  return json.data; // this leads to the return statement to be used with react //
};
//========   LISTINGS ==============//
export const getPosts = async (
  userToken,
  // title,
  // description,
  // price,
  // willDeliver
) => {
  // const body = {
  //   post: {
  //     title,
  //     description,
  //     price,
  //     willDeliver,
  //   },
  // };

  const fetchArgsUserPatch = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
    // body: JSON.stringify(body),
  };
  let res = await fetch(URL + "/posts")
  const json = await res.json();
  return json; // this leads to the return statement to be used with react //
};

//============ DELETE ==================//

//  does not delete: sets isActive to false//

export const deletePost = async (userToken) => {
  const fetchArgsDelete = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };
  const res = await fetch(
    URL + "/posts/5e8d1bd48829fb0017d2233b",
    fetchArgsDelete
  );
  const json = await res.json();
  console.log(json);
  return null;
};

// ========= TEST ROUTES==========  //

export const userInfoTestMe = async (userToken) => {
  const fetchArgsUser = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };
  const res = await fetch(URL + "/test/me", fetchArgsUser);
  const json = await res.json();
  console.log(json);
  return json; // this leads to the return statement to be used with react //
};

export const userInfoTestData = async (userToken) => {
  const fetchArgsData = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };
  const res = await fetch(URL + "/test/data", fetchArgsData);
  const json = await res.json();
  console.log(json);
  return json; // this leads to the return statement to be used with react //
};

//=========== MESSAGES ===============//

export const userMessages = async (message, content, userToken) => {
  const body = {
    user: {
      message,
      content,
    },
  };
  const fetchArgs = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
    body: JSON.stringify(body),
  };
  const res = await fetch(
    URL + "/posts/5e8929ddd439160017553e06/messages",
    fetchArgs
  );
  const json = await res.json();
  console.log(json);
};
