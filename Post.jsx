import { Avatar } from "@mui/material";
import React from 'react';
import './Post.css';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import  BookmarkIcon from "@mui/icons-material/Bookmark";

function Post({ user, postImage, likes, timestamp }) {
  return (
    <div className="Post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar> {user.charAt(0).toUpperCase()} </Avatar> {user} <span>{timestamp}</span>
        </div>

        <MoreHorizIcon />
      </div>

      <div className="post__image">
        <img src={postImage} alt="" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconMain">
            <FavoriteBorderIcon className="postIcon" />
            <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post__iconSave">
            <BookmarkIcon />
          </div>
        </div>
        Curtido por {likes} pessoas!
      </div>
    </div>
  );
}

export default Post;
