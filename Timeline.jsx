import React, { useState } from 'react';
import "./Timeline.css";
import Sugesstions from './Sugesstion';
import Post from "./posts/Post"


function Timeline() {

 
  const [posts, setPosts] = useState([
    {
      user: "Nintendo",
      postImage: "https://www.techbyte.it/wp-content/uploads/2023/03/the-legend-of-zelda-tears-of-kingdom.jpg",
      likes: 16919,
      timestamp: "2d",
    },
    {
      user: "Bioware",
      postImage: "https://th.bing.com/th/id/R.efa1ee97bb8b44bbf7da75fb30372a7e?rik=ObtEXFtaNW2m%2fA&pid=ImgRaw&r=0",
      likes: 1699,
      timestamp: "2d",
    },
    {
      user: "insomniac games",
      postImage: "https://assets.altarofgaming.com/wp-content/uploads/2023/06/marvels-spider-man-2-game-cover-altar-of-gaming-scaled.jpg",
      likes: 245389,
      timestamp: "23d",
    },
    {
      user: "Capcom",
      postImage: "https://www.psu.com/wp/wp-content/uploads/2022/06/ResidentEvil4-Remake-PS5-Wallpapers-0.jpg",
      likes: 6578,
      timestamp: "7d",
    },

    {
      user: "Remedy Entertainmen",
      postImage: "https://static.conciergeriedugeek.fr/wp-content/uploads/2021/04/Alan-Wake-2.png",
      likes: 6578,
      timestamp: "7d",
    },

    {
      user: "Nintendo",
      postImage: "https://www.gameinformer.com/sites/default/files/styles/body_default/public/2023/06/21/ecb1697a/super_mario_bros_wonder_art.jpg",
      likes: 44258,
      timestamp: "7d",
    },
  ]);

  return (
    < div className='timeline' >
      

    <div className='timeline'>
      <div className="timeline__left">
        <div className="timeline__post"></div>
        {posts.map(post => (
          <Post 
            key={post.user} 
            user={post.user} 
            postImage={post.postImage} 
            likes={post.likes} 
            timestamp={post.timestamp} 
          />
        ))}
      </div>
      <div className="timeline__right">
        <Sugesstions/>
      </div>
    </div>
     </div>
  )
}

export default Timeline;
