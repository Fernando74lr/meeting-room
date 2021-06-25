import { useState, useEffect } from 'react';
import { db } from '../../helper/firebase';
import { bubbleSortTime } from '../../helper/orderData';
import { toast } from '../../helper/sweetAlert2';

const Box = ({ onAdd, onDisable }) => {

    // Times
    const [times, setTimes] = useState([]);

    // Form
    const [name, setName] = useState('');
    const [initialTime, setInitialTime] = useState('');
    const [finalTime, setFinalTime] = useState('');
    const [date, setDate] = useState('');
    const [title, setDescription] = useState('');

    const getTimes = async () => {
      db.collection('times').onSnapshot((snapshot) => {
        const docs = [];
        snapshot.forEach( doc => {
          docs.push({...doc.data(), id: doc.id});
        });
        setTimes(bubbleSortTime(docs));
      });
    }

    useEffect(() => {
        console.log('Getting times from DB...');
        getTimes();
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        console.table([name, initialTime, finalTime, date, title]);

        // Check there is some task written
        if (!name || !initialTime || !finalTime || !date || !title) {
            toast('error', 'Hay campos vacíos, completa el formulario.');
            return;
        }

        const orderInitialTime = initialTime.split('-')[1];
        const orderFinalTime = finalTime.split('-')[1];

        for (let order = orderInitialTime-1; order <= orderFinalTime; order++) {
            console.log('Order: ', order);
            onDisable(order);
        }

        /*
            db.collection('times').doc(`${day}/${month}/2021`).collection('times').set()
            */
       

        const initial = initialTime.split('-')[0];
        const final = finalTime.split('-')[0];

        // Add Schedule
        onAdd({ name, initial, final, date, title });
        console.log({ name, initialTime, finalTime, date, title });

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
                <input type="text" id="name" autoComplete="off" className="montse" placeholder="Nombre" 
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
                <textarea name="d" id="description2" cols="30" rows="5" placeholder="Descripción"
                onChange={(e) => setDescription(e.target.value)} value={title} ></textarea>
            </div>

            <button id="btnReservar" className="montse">Reservar</button>
        </form>
    );
}

export default Box;