import React from 'react';
import './App.css';

const Dashboard = () => {
  const channels = ['Channel 1', 'Channel 2', 'Channel 3'];
  const vod = ['Movie 1', 'Movie 2', 'Movie 3'];
  const recommendations = ['Recommendation 1', 'Recommendation 2', 'Recommendation 3'];

  return (
    <div className="dashboard">
      <h1>Welcome to IPTV Dashboard</h1>

      <div className="section">
        <h2>Channels</h2>
        <ul>
          {channels.map((channel, index) => (
            <li key={index}>{channel}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Video On Demand</h2>
        <ul>
          {vod.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Recommendations</h2>
        <ul>
          {recommendations.map((recommendation, index) => (
            <li key={index}>{recommendation}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
