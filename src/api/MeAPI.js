const ME_URL =
  "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT/users/me";

const userInfo = {
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer TOKEN_STRING_HERE",
  },
};
fetch(ME_URL, userInfo)
  
  .then(res => {
    return res.json()
  })
  .then(data => console.log(data))
  .catch((error) => console.error(error));
