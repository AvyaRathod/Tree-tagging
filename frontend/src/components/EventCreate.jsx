import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { Link, Navigate } from "react-router-dom";

export default function EventCreate() {
  function handleLoginSubmit(ev) {
    ev.preventDefault();
    console.log({
      name,
      mobileNumber,
      email,
      eventName,
      eventDescription,
      eventDate,
      eventLocation,
    });
    const formData = {
      name,
      mobileNumber,
      email,
      eventName,
      eventDescription,
      eventDate,
      eventLocation,
    };
    axios
      .post("http://localhost:3001/create", formData)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  }

  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");

  return (
    <div className="mt-24 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Event Creation</h1>
        <form
          className="max-w-md mx-auto mt-10 "
          action=""
          onSubmit={handleLoginSubmit}
        >
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />

          <input
            type="password"
            placeholder="Enter your mobile number"
            value={mobileNumber}
            onChange={(ev) => setMobileNumber(ev.target.value)}
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />

          <input
            type="text"
            placeholder="Enter the name of the event"
            value={eventName}
            onChange={(ev) => setEventName(ev.target.value)}
          />

          <input
            type="text"
            placeholder="Enter the event description"
            value={eventDescription}
            onChange={(ev) => setEventDescription(ev.target.value)}
          />

          <input
            type="text"
            placeholder="Enter the date"
            value={eventDate}
            onChange={(ev) => setEventDate(ev.target.value)}
          />

          <input
            type="text"
            placeholder="Enter the event location"
            value={eventLocation}
            onChange={(ev) => setEventLocation(ev.target.value)}
          />

          <button className="primary mt-10">Create Event</button>
          <Link to={"/landing"}>
            <p className=" text-center mt-10 underline"> Back to home</p>
          </Link>
        </form>
      </div>
    </div>
  );
}
