import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Feed() {
  const[posts, setPosts] = useState([]);

  useEffect(()=>{
      const fetchPosts = async()=>{
      const res = await axios.get("posts/timeline/638f1bc556cb4ebcfb42a06d");
      setPosts(res.data)
    }
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {posts.map((p) => (
           <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  )
}
