export const createUser = async (username, password) => {
  const REG_URL =
    "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT/users/register";
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

  const res = await fetch(REG_URL, fetchArgs);
  const json = await res.json();

  console.log(json);
  // json.data.token
  return json;
};
