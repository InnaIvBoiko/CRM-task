import { db } from './firebase.js';
import { ref, get } from 'firebase/database';

export const getAppointmentsData = () => {
    const userRef = ref(db, `appointments`);
    return get(userRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                const appointmentsList = snapshot.val();
                console.log(appointmentsList);
                return appointmentsList;
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