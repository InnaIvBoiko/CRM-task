import { useState } from 'react';
import YearView from '../YearView/YearView.jsx';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import css from './Appointments.module.css';

const localizer = momentLocalizer(moment);

export default function Appointments({appointmentsList}) {
    const [view, setView] = useState('month');
    
    const events = appointmentsList.map((appointment) => ({
    id: appointment.id,
    title: `${appointment.name_client} ${appointment.surname_client}: ${appointment.name_opportunity}`,
    start: new Date(appointment.start),
    end: new Date(appointment.end),
    }));

    return (
        <section className={css.wrap}>
            {view === 'year' ? (
<button className={css.yearBtn} onClick={() => setView('week')}>Indietro</button>
            ): (
                    <button className={css.yearBtn} onClick={() => setView('year')}>Year</button>
            )}
            

            {view === 'year' ? (
                <YearView events={events} />
            ) : (
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    view={view}
                    onView={(newView) => setView(newView)}
                    style={{ height: 500 }}
                />
            )}
        </section>
    );
}