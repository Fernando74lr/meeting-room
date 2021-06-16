import './App.css';
import Box from './components/Form/Box.jsx';
import LeftBox from './components/NavBar/LeftBox.jsx';
import RightBox from './components/Schedules/RightBox.jsx';
import { useState } from 'react';

function App() {
  const test = [
    {
      date: '2021-06-11',
      initialTime: '14:14',
      finalTime: '15:30',
      title: '0 Serrano posted a photo on your wall.',
      name: 'Fernando'
    },
    {
      date: '2021-06-11',
      initialTime: '14:14',
      finalTime: '15:30',
      title: '1 Serrano posted a photo on your wall.',
      name: 'Fernando'
    },
    {
      date: '2021-06-11',
      initialTime: '14:14',
      finalTime: '15:30',
      title: '2 Serrano posted a photo on your wall.',
      name: 'Fernando'
    },
    {
      date: '2021-06-11',
      initialTime: '14:14',
      finalTime: '15:30',
      title: '3 Serrano posted a photo on your wall.',
      name: 'Fernando'
    },
    {
      date: '2021-06-11',
      initialTime: '14:14',
      finalTime: '15:30',
      title: '4 Serrano posted a photo on your wall.',
      name: 'Fernando'
    },
    {
      date: '2021-06-11',
      initialTime: '14:14',
      finalTime: '15:30',
      title: '5 Serrano posted a photo on your wall.',
      name: 'Fernando'
    }
  ];

  const [schedules, setSchedules] = useState(test);
  
  // Add Schedule.
  const addSchedule = (data) => {
    setSchedules([data, ...schedules]);
  }

  return (
    <div className="container">
      <Box onAdd={ addSchedule } />
      {console.log('~ schedules', schedules)}
      <LeftBox />
      <RightBox schedules={ schedules } />
    </div>
  );
}

export default App;
