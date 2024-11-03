import ClientsItem from '../ClientsItem/ClientsItem.jsx';
import css from './ClientsList.module.css';

export default function ClientsList({ clientsList }) {
    return (
        <ul className={css.list}>
            {clientsList.map((client) => (
                <li key={client.id}>
                    <ClientsItem client={client} />
                </li>
            ))}
        </ul>
    );
}