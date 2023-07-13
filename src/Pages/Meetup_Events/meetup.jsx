import React, { useContext } from "react";
import { MeetupContext } from "../../Context";
import "./meetups.css";
import { useNavigate } from "react-router-dom";
export default function Meetup() {
  const { meetups,NavigatePage } = useContext(MeetupContext);
const navigate = useNavigate()
  console.log(meetups);
  return (
    <div>
      <div>
        <h1>Meetups</h1>
        <input type="search" />
      </div>
      <div>
        <h1>Meetup Events</h1>
        <ul type="none">
          {meetups.map((item) => (
            <li>
              <div className="box-upper">
                <img
                  src={item.eventThumbnail}
                  onClick={()=>NavigatePage(item.id)}
                  alt=""
                  width="400px"
                  className="img"
                />
                <button className="mode-btn">{item.eventType}</button>
              </div>
              <div>{item.eventStartTime}</div>
              <div>{item.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
