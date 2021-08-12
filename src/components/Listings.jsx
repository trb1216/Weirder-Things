import React, { useEffect, useState } from "react";
import { getPosts } from "../api/index";
const userToken = localStorage.getItem("userToken");

const Listings = () => {

  const [posts, setPosts] = useState([]);

  useEffect(async()=>{
    let res = await getPosts(userToken)
    let apiPosts = await res.data.posts
    setPosts(apiPosts)
    console.log(posts)

  },[])

  return (
    <div>
      <h1>Listings</h1>
    {

      posts.length > 0 ?
      posts.map(post => <>
      <h1>{post.title}</h1>
        <h4>{post.location}</h4>
      </> ) : null

    }
    </div>
  )

}
export default Listings;
