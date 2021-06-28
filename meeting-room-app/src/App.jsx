/* global gapi */
import './App.css';
import Box from './components/Form/Box.jsx';
import LeftBox from './components/NavBar/LeftBox.jsx';
import RightBox from './components/Schedules/RightBox.jsx';
import { useState, useEffect } from 'react';
import { db } from './helper/firebase';
import { toast } from './helper/sweetAlert2';
import { bubbleSort } from './helper/orderData';
import { CREDENTIALS } from './credentials';

function App() {
  const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  const SCOPES = "https://www.googleapis.com/auth/calendar.events";

  const loadEvent = (event) => {
    gapi.load('client:auth2', () => {
      console.log('loaded client')

      gapi.client.init({
        apiKey: CREDENTIALS.API_KEY,
        clientId: CREDENTIALS.CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })

      gapi.client.load('calendar', 'v3', () => console.log('bam!'))

      gapi.auth2.getAuthInstance().signIn()
      .then(() => {

        var request = gapi.client.calendar.events.insert({
          'calendarId': 'primary',
          'resource': event,
        });

        request.execute(event => {
          console.log(event)
          window.open(event.htmlLink)
        });
      });
    });
  }
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
      setSchedules(bubbleSort(docs).reverse());
    });
  }

  const uploadSchedule = async (data) => {
    await db.collection('schedules').doc(`${Date.now()}`).set(data);
  }

  const setNotAvailableSchedule = async (date, id) => {
    const dataRef = db.collection(`dates/${date}/times`).where('order', '==', id);
    const data = await dataRef.get();
    data.forEach(doc => {
      db.doc(`dates/${date}/times/${doc.id}`).set({
        ...doc.data(),
        'available': false
      });
    });
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
      <Box onAdd={ addSchedule } onDisable={ setNotAvailableSchedule } onLoadEvent={ loadEvent }/>
      <LeftBox />
      <RightBox schedules={ schedules } />
    </div>
  );
}

export default App;
