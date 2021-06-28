import { useState, useEffect } from 'react';
import { db } from '../../helper/firebase';
import { bubbleSortTime } from '../../helper/orderData';
import { toast } from '../../helper/sweetAlert2';

const Box = ({ onAdd, onDisable, onLoadEvent }) => {

    // Times
    const [times, setTimes] = useState([]);

    // Form
    const [name, setName] = useState('');
    const [initialTime, setInitialTime] = useState('');
    const [finalTime, setFinalTime] = useState('');
    const [date, setDate] = useState('');
    const [title, setDescription] = useState('');

    const getTimes = async (date) => {
      db.collection(`dates/${date}/times`).onSnapshot((snapshot) => {
        const docs = [];
        snapshot.forEach( doc => {
          docs.push({...doc.data(), id: doc.id});
        });
        setTimes(bubbleSortTime(docs));
      });
    }

    useEffect(() => {
        console.log('Getting times from DB...');
        getTimes(orderDate(date));
    }, [date]);

    const orderDate = (date) => {
        const arrayDate = date.split('-');
        return `${Number(arrayDate[2])}-${Number(arrayDate[1])}-${Number(arrayDate[0])}`;
    }

    const prepareEvent = (data) => {
        return {
            'summary': data.newTitle,
            'description': data.newDescription,
            'start': {
                'dateTime': new Date(`${data.date} ${data.initial} GMT-5`),
                'timeZone': 'Mexico/General'
              },
              'end': {
                'dateTime':  new Date(`${data.date} ${data.final} GMT-5`),
                'timeZone': 'Mexico/General'
            },
            'attendees': data.emails,
            'reminders': {
              'useDefault': false,
              'overrides': [
                {'method': 'popup', 'minutes': 10}
              ]
            }
        };
    }

    const onSubmit = (e) => {
        e.preventDefault();

        // console.table([name, initialTime, finalTime, date, title]);

        // Check there is some task written
        if (!name || !initialTime || !finalTime || !date || !title) {
            toast('error', 'Hay campos vacíos, completa el formulario.');
            return;
        }

        const orderInitialTime = initialTime.split('-')[1];
        const orderFinalTime = finalTime.split('-')[1];

        for (let order = orderInitialTime-1; order <= orderFinalTime; order++) {
            // console.log('Order: ', order);
            onDisable(orderDate(date), order);
        }

        // Prepare emails, title and description
        const emailsJoined = name.split(',');
        const emails = [];
        emailsJoined.forEach(email => emails.push({'email': email.trim()}));
        const newTitle = title.split('-')[0].trim();
        const newDescription = title.split('-')[1].trim();

        // Prepare initial and final times
        const initial = initialTime.split('-')[0];
        const final = finalTime.split('-')[0];

        // Add Schedule
        onAdd({ emails, initial, final, date, newTitle, newDescription });

        // Prepare and upload event to Google Calendar
        console.log({ emails, initial, final, date, newTitle, newDescription });
        const event = prepareEvent({ emails, initial, final, date, newTitle, newDescription });
        console.log(event);
        onLoadEvent(event);

        // Clean form
        setName('');
        setInitialTime('Desde');
        setFinalTime('Hasta');
        setDate('');
        setDescription('');
    }

    return (
        <form className="box" onSubmit={onSubmit}>
            <div className="container-2">
                <h1 className="title montse">Sala de juntas</h1>
            </div>

            <div className="container-3">
                <span className="icon"><i className="fa fa-user"></i></span>
                <input type="text" id="name" autoComplete="off" className="montse" placeholder="Correos" 
                onChange={(e) => setName(e.target.value)} value={name} />
            </div>

            <div className="container-4">
                <span className="icon"><i className="fas fa-calendar"></i></span>
                <input type="date" id="date" className="montse" 
                onChange={(e) => setDate(e.target.value)} value={date} />
            </div>

            <div className="container-5">

            <span className="icon"><i className="fas fa-hourglass-start"></i></span>
                <select name="times" className="montse" id="initial-time" onChange={(e) => setInitialTime(e.target.value)}>
                    <option key="---" value="none" defaultValue>Desde</option>
                    {
                        times.map( t => {
                            if (t.available)
                                return (
                                    <option
                                        key={ t.hour }
                                        id={ t.hour }
                                        value={ t.hour + '-' + t.order}
                                    >{ t.hour }</option>
                                );
                            else
                                return (
                                    <option
                                        key={ t.hour + 'dis' }
                                        id={ t.hour }
                                        disabled
                                        value={ t.hour + '-' + t.order}
                                    >{ t.hour }</option>
                                );
                        })
                    }
                </select>
            </div>

            <div className="container-5">
                <span className="icon"><i className="fas fa-hourglass-end"></i></span>
                <select name="times2" className="montse" id="final-time" onChange={(e) => setFinalTime(e.target.value)}>
                    <option key="---" value="none" defaultValue>Hasta</option>
                    {
                        times.map( t => {
                            if (t.available)
                            return (
                                <option
                                    key={ t.hour }
                                    id={ t.hour }
                                    value={ t.hour + '-' + t.order }
                                >{ t.hour }</option>
                            );
                            else
                            return (
                                <option
                                    key={ t.hour + 'dis' }
                                    id={ t.hour }
                                    disabled
                                    value={ t.hour + '-' + t.order }
                                >{ t.hour }</option>
                            );
                        })
                    }
                </select>
            </div>

            <div className="container-6">
                <span className="icon"><i className="fas fa-align-left"></i></span>
                <textarea 
                    id="description2"
                    cols="30"
                    rows="5"
                    placeholder="Título - Descripción"
                    onChange={(e) => setDescription(e.target.value)} value={title} ></textarea>
                    
            </div>

            <button id="btnReservar" className="montse">Reservar</button>
        </form>
    );
}

export default Box;