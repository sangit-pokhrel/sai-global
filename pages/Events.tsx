"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.saiglobal.getintoto.com/api/v1/events/');
        setEvents(response.data); // Assuming response.data is an array of events
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run effect only once on mount

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  // Calculate the events to display based on the current page
  const displayedEvents = events.slice(0, currentPage * eventsPerPage);

  return (
    <div className="eventcontainer bg-gray-100 py-10">
      <div className="container mx-auto">
        <div className="eventheading text-3xl flex justify-center mb-8">
          <h1 className="flex items-center">
            Event <span className="text-rose-800 text-4xl font-bold mx-2">&</span> Schedules
          </h1>
        </div>
        <div className="event-card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-5">
          {displayedEvents.map((event, index) => (
            <div key={index} className="event-card bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <div className="event-card-image mb-4 overflow-hidden rounded-lg">
                <img 
                  src={event.description_image} 
                  alt={`Event ${index}`} 
                  className="w-full h-60 object-cover transition duration-300 ease-in-out hover:opacity-75" 
                />
              </div>
              <div className="event-card-content text-lg tracking-widest">
                <h2 className="font-bold text-2xl mb-2 text-gray-900">{event.title}</h2>
                <p className="text-sm text-gray-600 mt-1 mb-4">{event.event_date}</p>
                <p className="text-base text-gray-700">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* {currentPage * eventsPerPage < events.length && (
          <div className="flex justify-center mt-8">
            <button 
              onClick={handleLoadMore} 
              className="bg-rose-800 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-rose-600"
            >
              Load More
            </button>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Events;
