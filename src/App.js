import React from 'react';
import Navbar from './components/Navbar';
import Event from './components/Event';
import MeetupInfo from './components/MeetupInfo';

const App = () => {

  return (
    <>
      <Navbar />
      <div style={{
        marginTop: 60,
        padding: 10
      }}>
        <Event />
        <MeetupInfo />
      </div>
    </>
  );
}

export default App;
