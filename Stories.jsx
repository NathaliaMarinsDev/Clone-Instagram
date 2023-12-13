// Stories.js
import React, { useState } from 'react';
import "./Stories.css";


const Stories = () => {
  const [stories, setStories] = useState([
    {
      user: "user1",
      storyImage: "https://example.com/story1.jpg",
    },
    {
      user: "user2",
      storyImage: "https://example.com/story2.jpg",
    },
    // Adicione mais histórias conforme necessário
  ]);

  return (
    <div className="stories-container">
      {stories.map((story, index) => (
        <div key={index} className="story">
            
          <img src={story.storyImage} alt={story.user} className="story-image" />
          <p className="story-user">{story.user}</p>
        </div>
      ))}
    </div>
  );
}

export default Stories;

