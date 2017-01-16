/**
 * Created by alucas on 16/1/17.
 */
import * as firebase from 'firebase';
import config from '../private';

firebase.initializeApp(config);


let database = firebase.database().ref();

console.log(firebase, database);

// database.on('value', snapshot => {
//   console.log(snapshot.val());
// });

export default database;