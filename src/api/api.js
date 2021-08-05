const URL = "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT";

export const fetchAllPosts = async () => {
  const userPostsURL = `${URL}/`;
  const result = await fetch(userPostsURL);
  const json = await result.json();
  return json;
};

export const userRegister = () => {
  fetch(`${URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: "",
        password: "",
      },
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(console.error);
};
export const userLogin = () => {
  fetch(`${URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: "",
        password: "",
      },
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(console.error);
};
