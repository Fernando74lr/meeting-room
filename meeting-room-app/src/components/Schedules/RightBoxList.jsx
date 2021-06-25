import RightBoxListItem from './RightBoxListItem';
import { useState, useEffect } from 'react';

const RightBoxList = ({ schedules }) => {

    const [schedulesState, setstate] = useState(schedules);

    useEffect( () => {
        setstate(schedules);
    }, [schedules]);

    const getMonth = (month) => {
        switch (month) {
            case '01': return 'Enero';
            case '02': return 'Febrero';
            case '03': return 'Marzo';
            case '04': return 'Abril';
            case '05': return 'Mayo';
            case '06': return 'Junio';
            case '07': return 'Julio';
            case '08': return 'Agosto';
            case '09': return 'Septiembre';
            case '10': return 'Octubre';
            case '11': return 'Noviembre';
            case '12': return 'Diciembre';
            default: return 'Undefined'
        }
    }

    return (
        <ul className="rb">
            {
                schedulesState.map((sch, i) => (
                    <RightBoxListItem
                        key={ i }
                        date={ sch.date.split('-')[2] }
                        month={ getMonth(sch.date.split('-')[1]) }
                        year={ sch.date.split('-')[0] }
                        initial_time= { sch.initial }
                        final_time={ sch.final }
                        title={ sch.title }
                        name={ sch.name }
                    />
                ))
            }
        </ul>
    );
}

export default RightBoxList;
