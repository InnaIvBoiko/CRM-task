import { useState, useEffect } from 'react';
import OpportunitiesList from '../../components/OpportunitiesList/OpportunitiesList.jsx';
import { getOpportunitiesData } from '../../utils/opportunities.js';

export default function OpportunitiesPage() {
    const [opportunities, setOpportunities] = useState([]);

    useEffect(() => {
        const fetchOpportunitiesList = async () => {
            const opportunitiesData = await getOpportunitiesData();
            setOpportunities(Object.values(opportunitiesData) || []);
        };
        fetchOpportunitiesList();
    }, []);

    return (
        <>
            <h2>Opportunities:</h2>
            <OpportunitiesList opportunitiesList={opportunities} />

        </>
    );
}