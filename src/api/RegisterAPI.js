
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
fetch(REG_URL, userRegister)
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
