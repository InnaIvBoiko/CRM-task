import css from './OpportunitiesItem.module.css';

export default function OpportunitiesItem({ opportunity: {
    id,
    name,
    description,
    state,
    valore_stimato,
    note

} }) {
    return (
        <div className={css.card} id={id}>
            <h3>{name}</h3>
            <p>{state}</p>
            <h4>{description}</h4>
            <h4>{valore_stimato}</h4>
            <p>{note}</p>
        </div>
    );
}