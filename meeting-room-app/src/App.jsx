import './App.css';
import Box from './components/Form/Box.jsx';
import LeftBox from './components/NavBar/LeftBox.jsx';
import RightBox from './components/Schedules/RightBox.jsx';
import { useState, useEffect } from 'react';
import { db } from './helper/firebase';
import { toast } from './helper/sweetAlert2';
import { bubbleSort } from './helper/orderData';

function App() {
  const [schedules, setSchedules] = useState([]);

  const getSchedules = async () => {
    db.collection('schedules').onSnapshot((snapshot) => {
      const docs = [];
      snapshot.forEach( doc => {
        docs.push({
          ...doc.data(),
          id: doc.id
        });
      });
      setSchedules(bubbleSort(docs));
    });
  }

  const uploadSchedule = async (data) => {
    await db.collection('schedules').doc(`${Date.now()}`).set(data);
  }

  useEffect(() => {
    console.log('Getting data from DB...');
    getSchedules();
  }, []);

 
  // Add Schedule.
  const addSchedule = (data) => {
    setSchedules([data, ...schedules]);
    uploadSchedule(data);
    toast('success', 'Junta agregada correctamente');
  }

  return (
    <div className="container">
      <Box onAdd={ addSchedule } />
      <LeftBox />
      <RightBox schedules={ schedules } />
    </div>
  );
}

export default App;
