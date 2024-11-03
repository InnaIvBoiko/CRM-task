import { db } from './firebase.js';
import { ref, get } from 'firebase/database';

export const getClientsData = () => {
    const userRef = ref(db, `clients`);
    return get(userRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                const clientsList = snapshot.val();
                return clientsList;
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