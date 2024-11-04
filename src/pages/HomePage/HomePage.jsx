import Appointments from '../../components/Appointments/Appointments.jsx';
import { getAppointmentsData } from '../../utils/appointments.js';
import { useEffect, useState } from 'react';


// import css from './HomePage.module.css';

export default function HomePage() {
        const [appointments, setAppointments] = useState([]);
    useEffect(() => {
            const fetchAppointmentsList = async () => {
            const appointmentsData = await getAppointmentsData();
            setAppointments(Object.values(appointmentsData) || []);
        };
        fetchAppointmentsList();
},[])
    return (
        <>
            <Appointments appointmentsList={appointments} />
        </>
    )
}