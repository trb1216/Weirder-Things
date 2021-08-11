import React, { useEffect, useState } from "react";
import { userList } from "../api/index";
const userToken = localStorage.getItem("userToken");

const Listings = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    userList(userToken).then(setPosts);
  }, []);

  return (
    <div>
      <h1>Listings</h1>
      {posts && posts.length > 0
        ? posts.map((post) => {
            return (
              <div className="Postings" key={userList}>
                <h4>{post.title}</h4>
                <p>
                  Who: <b>{post.author}</b>
                </p>
                <p>
                  When: <b>{post.createdAt}</b>
                </p>
                <p>
                  What: <b>{post.description}</b>
                </p>
                <p>
                  Price: <b>{post.price}</b>
                </p>
              </div>
            );
          })
        : "Loading..."}
    </div>
  );
};
export default Listings;
