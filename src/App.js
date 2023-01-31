import './App.css';
import React from 'react';
import Search from './search'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

const games = [
    { id: '1', name: 'dragon quest' },
    { id: '2', name: 'mario' },
    { id: '3', name: 'sonic' },
    { id: '4', name: 'zelda' },
];

const filterPosts = (games, query) => {
    if (!query) {
        return games;
    }

    return games.filter((game) => {
        const gameName = game.name.toLowerCase();
        return gameName.includes(query);
    });
};

function App() {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const filteredPosts = filterPosts(games, query);

  return (
      <div className="App">
          <h1>
              Favorite Game Organizer
          </h1>
          <Search />
          <ul>
              {filteredPosts.map((games) => (
                  <li key={games.id}>{games.name}</li>
              ))}
          </ul>
      </div>
  );
}

export default App;
