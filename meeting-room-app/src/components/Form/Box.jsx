import { useState } from 'react';
import { toast } from '../../helper/sweetAlert2';

const Box = ({ onAdd }) => {

    const [name, setName] = useState('');
    const [initialTime, setInitialTime] = useState('');
    const [finalTime, setFinalTime] = useState('');
    const [date, setDate] = useState('');
    const [title, setDescription] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        // Check there is some task written
        if (!name || !initialTime || !finalTime || !date || !title) {
            toast('error', 'Hay campos vacíos, completa el formulario.');
            return;
        }

        // Add Schedule
        onAdd({ name, initialTime, finalTime, date, title });
        console.log({ name, initialTime, finalTime, date, title });

        // Clean form
        setName('');
        setInitialTime('');
        setFinalTime('');
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
                <input type="text" id="name" className="montse" placeholder="Nombre" 
                onChange={(e) => setName(e.target.value)} value={name} />
            </div>

            <div className="container-4">
                <span className="icon"><i className="fas fa-hourglass-start"></i></span>
                <input type="time" id="initial-time" className="montse" 
                onChange={(e) => setInitialTime(e.target.value)} value={initialTime} />
            </div>

            <div className="container-5">
                <span className="icon"><i className="fas fa-hourglass-end"></i></span>
                <input type="time" id="final-time" className="montse" 
                onChange={(e) => setFinalTime(e.target.value)} value={finalTime} />
            </div>

            <div className="container-5">
                <span className="icon"><i className="fas fa-calendar"></i></span>
                <input type="date" id="date" className="montse" 
                onChange={(e) => setDate(e.target.value)} value={date} />
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