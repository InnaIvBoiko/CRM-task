import { db } from './firebase.js';
import { ref, get } from 'firebase/database';

export const getOpportunitiesData = () => {
    const userRef = ref(db, `opportunities`);
    return get(userRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                const opportunitiesList = snapshot.val();
                return opportunitiesList;
            } else {
                return null;
            };
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
};