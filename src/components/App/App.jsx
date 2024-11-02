import { useEffect } from 'react';
import { getClientsData } from '../../utils/clients.js';
import { getOpportunitiesData } from '../../utils/opportunities.js';
import { getAppointmentsData } from '../../utils/appointments.js';
import css from './App.module.css';

export default function App() {
    useEffect(() => {
        getClientsData();
        getOpportunitiesData();
        getAppointmentsData();
    },[])
    return (
        <main className={css.container}>
                <h1 lang='en'>Hello world!!!</h1>
        </main>
    );
}