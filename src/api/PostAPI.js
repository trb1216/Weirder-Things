const POSTS_URL =
  "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT/posts";

const userPost = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer TOKEN_STRING_HERE",
  },
  body: JSON.stringify({
    /* whatever things you need to send to the API */
  }),
};
fetch(POSTS_URL, userPost)
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("ERROR"));
