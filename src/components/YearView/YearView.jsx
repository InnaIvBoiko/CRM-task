export default function YearView({ events }) {
    const months = Array.from({ length: 12 }, (_, i) => new Date(2024, i, 1));

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {months.map((month) => (
                <div key={month.getMonth()} style={{ width: '25%', padding: '10px' }}>
                    <h3>{month.toLocaleString('default', { month: 'long' })}</h3>
                    {events
                        .filter(event => event.start.getMonth() === month.getMonth())
                        .map(event => (
                            <div key={event.id}>
                                <strong>{event.title}</strong>
                                <p>{event.start.toLocaleDateString()}</p>
                            </div>
                        ))}
                </div>
            ))}
        </div>
    );
}