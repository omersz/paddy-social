import React from 'react';
import { useContext, useEffect, useState } from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async()=>{
      const res = await axios.get("posts/timeline/643e8c47d2afefe28a6e64ad")
      console.log(res)
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {/*Posts.map((p) => (
           <Post key={p.id} post={p} />
        ))*/}
      </div>
    </div>
  )
}
