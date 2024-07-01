"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Events = () => {
  const [events, setEvents] = useState<{ imageUrl: string; title: string; description: string }[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/events/');
        setEvents(response.data); // Assuming the API returns an array of events
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="eventcontainer">
      <div className="container">
        <div className="eventheading text-3xl flex" style={{ padding: '1rem 0rem 10px 7rem' }}>
          <h1>
            Event <span className="text-rose-800 text-4xl font-bold">&</span> Schedules
          </h1>
          <hr className="bg-rose-900 h-2" />
        </div>
        <div className="event-card-container flex justify-center gap-8 flex-wrap">
          {events.map((event, index) => (
            <div key={index} className="event-card bg-[#FFF1EF] p-2">
              <div className="event-card-image" style={{ width: '400px', maxHeight: '300px' }}>
                <img src={event.imageUrl} alt={`event${index}`} />
              </div>
              <div className="event-card-content text-xl tracking-widest">
                <h2>{event.title}</h2>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
