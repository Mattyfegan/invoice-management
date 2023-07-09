import { addDoc, collection } from 'firebase/firestore';
import { firestore } from './firebaseConfig.jsx';

const testSubmit = (event, uid) => {
    event.preventDefault();

    const data = event.target.testdata.value;

    const ref = collection(firestore, `users/${uid}/settings`);

    try {
        addDoc(ref, {testData: data});
    } catch(err) {
        console.log(err);
    };
};

export default testSubmit;