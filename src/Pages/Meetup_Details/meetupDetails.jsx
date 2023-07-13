import React, { useContext } from "react";
import {CiLocationOn} from "react-icons/ci"
import { MeetupContext } from "../../Context";
import "./meetupDetails.css";

export default function MeetupDetails() {
  const { meetups, id } = useContext(MeetupContext);

  return (
    <div>
      <div>
        <h1>MeetUp</h1>
        <input type="search" />
      </div>
      <div>
        <h1>Meetup Events</h1>
        <ul type="none">
          {meetups
            .filter((event) => event.id === id)
            .map((item) => (
              <li className="flex">
                <div className="left-box">
                  <h1>{item.title}</h1>
                  <p>
                    Hosted By :<br />
                    <b> {item.hostedBy}</b>
                  </p>
                  <img src={item.eventThumbnail} alt="" className="img" />
                  <h2>Details :</h2>
                  <p>{item.eventDescription}</p>
                  <h2>Additional Information :</h2>
                  <p>
                    <b>Dress Code :</b>
                    {item.additionalInformation.dressCode}
                  </p>
                  <p>
                    <b>Age Restrictions :</b>
                    {item.additionalInformation.ageRestrictions}
                  </p>
                  <p>
                    <h2>
                      Event Tags:
                      <br />
                    </h2>
                    <div className="flex">
                      {item.eventTags.map((tag) => (
                        <p className="event-tag">{tag}</p>
                      ))}
                    </div>
                  </p>
                </div>
                <div className="right-box">
                  <div className="date-time">
                    <CiLocationOn/>
                    <p>{item.eventStartTime}</p>
                    <p>{item.eventEndTime}</p>
                    <p>{item.address}</p>
                    <p>₹{item.price}</p>
                  </div>
                  <div>
                    <h1>Speakers : ({item.speakers.length})</h1>
                    <ul className="speaker-list">
                      {item.speakers.map((speaker) => (
                        <li type="none" className="speaker">
                          <img
                            src={speaker.image}
                            height="100px"
                            alt=""
                            className="speaker-img"
                          />
                          <p>
                            <b> {speaker.name}</b>
                          </p>
                          <p>{speaker.designation}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
