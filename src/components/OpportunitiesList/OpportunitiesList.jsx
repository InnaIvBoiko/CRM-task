import OpportunitiesItem from '../OpportunitiesItem/OpportunitiesItem.jsx';
import css from './OpportunitiesList.module.css';

export default function OpportunitiesList({ opportunitiesList }) {
    return (
        <ul className={css.list}>
            {opportunitiesList.map((opportunity) => (
                <li key={opportunity.id}>
                    <OpportunitiesItem opportunity={opportunity} />
                </li>
            ))}
        </ul>
    );
}