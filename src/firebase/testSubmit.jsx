import { addDoc, collection } from 'firebase/firestore';
import { firestore } from './firebaseConfig.jsx';

const testSubmit = (event) => {
    event.preventDefault();

    const data = event.target.testdata.value;

    const ref = collection(firestore, 'test_data');

    try {
        addDoc(ref, {testData: data});
    } catch(err) {
        console.log(err);
    };
};

export default testSubmit;