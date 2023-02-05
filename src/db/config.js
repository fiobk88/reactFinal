import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

//solo para update de productos
import { arrayProducts } from '../Data/products';
import { uploadCollectionItems } from '../Helpers/firebaseHelpers';

const firebaseConfig = {
    apiKey: 'AIzaSyB0onPKaEhmOwKayIcaPQWx-b4tKhzhbnw',
    authDomain: 'gammin-zone.firebaseapp.com',
    projectId: 'gammin-zone',
    storageBucket: 'gammin-zone.appspot.com',
    messagingSenderId: '147655618205',
    appId: '1:147655618205:web:8d72dafe535fcf5827ee74',
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

//Correr por única vez cuando aún no he subido los productos a mi colección.
if (false) {
    setTimeout(() => {
        uploadCollectionItems(arrayProducts, 'products');
    }, 4000);
}
