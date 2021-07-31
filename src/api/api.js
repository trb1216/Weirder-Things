const URL = "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT";

export const fetchAllPosts = async () => {
  const userPostsURL = `${URL}/posts`;
  const result = await fetch(userPostsURL);
  const json = await result.json();
  return json;
};

export const userRegister = (username, password) => {
  fetch(`${URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer TOKEN_STRING_HERE",
    },
    body: JSON.stringify({
      user: { username, password },
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(console.error);
};
export const userLogin = (username, password) => {
  fetch(`${URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(console.error);
};
