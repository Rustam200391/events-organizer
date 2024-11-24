import React, { useState } from "react";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import "./App.css";

const App = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const deleteEvent = (index) => {
    const newEvents = events.filter((_, i) => i !== index);
    setEvents(newEvents);
  };

  return (
    <div className="App">
      <h1>Организация мероприятий для HR специалистов</h1>
      <EventForm addEvent={addEvent} />
      <EventList events={events} deleteEvent={deleteEvent} />
    </div>
  );
};

export default App;
