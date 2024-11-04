import css from './ClientsItem.module.css';

export default function ClientsItem({ client: {
    id,
    name,
    surname,
    phone,
    email,
    date_of_birth

} }) {
    return (
        <div className={css.card} id={id}>
            <h3>{name} {surname}</h3>
            <p>{date_of_birth}</p>
            <h4>{phone}</h4>
            <a href={'mailto:' + email} target='_blank'>{email}</a>
        </div>
    )
}