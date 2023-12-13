import React from 'react';
import "./Sugesstion.css";
import { Avatar } from "@mui/material";

function sugesstion() {
  return (
    <div className="sugesstion">  
    <div className="sugesstion__title"> Sugestão para voce! Mas tome cuidado... </div>
    <div className="sugesstions__usernames">
        

      <div className="sugesstion__username">

        <div className="username__left">
          <span className="avatar">
            <Avatar>Z</Avatar>
          </span>
          <div className="username__info">
            <span className="username">Zeus</span>
            <span className="relation"> Novo no Instragram </span>
          </div>
          <button className="follow__button">Follow</button>
        </div>

      </div>

      <div className="sugesstion__username">
        <div className="username__left">
          <span className="avatar">
            <Avatar>K</Avatar>
          </span>
          <div className="username__info">
            <span className="username">Kratos</span>
            <span className="relation">Novo no Instragram </span>
          </div>
          <button className="follow__button">Follow</button>
        </div>

      </div>


      </div>

      <div className="sugesstion__username">
        <div className="username__left">
          <span className="avatar">
            <Avatar>O</Avatar>
          </span>
          <div className="username__info">
            <span className="username"> Odin</span>
            <span className="relation">Novo no Instragram </span>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        </div>
       

      



    </div>   
      
   
  )
}

export default sugesstion;
