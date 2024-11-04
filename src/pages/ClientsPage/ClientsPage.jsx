import { useEffect, useState } from 'react';
import ClientsList from '../../components/ClientsList/ClientsList.jsx';
import { getClientsData } from '../../utils/clients.js';

export default function ClientsPage() {
    const [clients, setClients] = useState([]);
    useEffect(() => {
        const fetchClientsList = async () => {
            const clientsData = await getClientsData();
            setClients(Object.values(clientsData) || []);
        };
        fetchClientsList();
    }, []);

    
    return (
        <ClientsList clientsList={clients} />
    )
}