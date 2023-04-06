import React from 'react';
import { useContext, useEffect, useState } from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    console.log("feed rendered");
  })

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
