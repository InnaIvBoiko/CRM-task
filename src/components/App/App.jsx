import { useState, useEffect } from 'react';
import Appointments from '../Appointments/Appointments.jsx';
import { getClientsData } from '../../utils/clients.js';
import { getOpportunitiesData } from '../../utils/opportunities.js';
import { getAppointmentsData } from '../../utils/appointments.js';
import css from './App.module.css';

export default function App() {
    const [clients, setClients] = useState([]);
    const [opportunities, setOpportunities] = useState([]);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchClientsList = async () => {
            const clientsData = await getClientsData();
            setClients(Object.values(clientsData) || []);
        };
        fetchClientsList();

        const fetchOpportunitiesList = async () => {
            const opportunitiesData = await getOpportunitiesData();
            setOpportunities(Object.values(opportunitiesData) || []);
        };
        fetchOpportunitiesList();

        const fetchAppointmentsList = async () => {
            const appointmentsData = await getAppointmentsData();
            setAppointments(Object.values(appointmentsData) || []);
        };
        fetchAppointmentsList();

    }, []);

    return (
        <main className={css.container}>
            <Appointments appointmentsList={appointments} />
            
        </main>
    );
}