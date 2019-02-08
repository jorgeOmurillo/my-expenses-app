import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

//// child_removed
//database.ref('expenses').on('child_removed', snapshot => {
//console.log(snapshot.key, snapshot.val());
//});

//// child_changed
//database.ref('expenses').on('child_changed', snapshot => {
//console.log(snapshot.key, snapshot.val());
//});

//// child_added
//database.ref('expenses').on('child_added', snapshot => {
//console.log(snapshot.key, snapshot.val());
//});

//database
//.ref('expenses')
//.once('value')
//.then(snapshot => {
//const expenses = [];

//snapshot.forEach(childSnapshot => {
//expenses.push({
//id: childSnapshot.key,
//...childSnapshot.val
//});
//});

//console.log(expenses);
//})
//.catch(e => {
//console.log(e);
//});

//database.ref('expenses').on('value', snapshot => {
//const expenses = [];

//snapshot.forEach(childSnapshot => {
//expenses.push({
//id: childSnapshot.key,
//...childSnapshot.val
//});
//});

//console.log(expenses);
//});

//database.ref('expenses').push({
//description: 'no se',
//note: 'compralo',
//amount: 121,
//createdAt: moment(0).format('MM-YYYY')
//});

//database.ref().once('value', snapshot => {
//const val = snapshot.val();
//console.log(val);
//});

//database.ref('notes').push({
//title: 'Course topics',
//body: 'Django, Python, JavaScript'
//});

//database.ref().on('value', (snapshot) => {
//const val = snapshot.val();
//console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
//});

//database
//.ref('location/city')
//.once('value')
//.then(snapshot => {
//const val = snapshot.val();
//console.log(val);
//})
//.catch(e => {
//console.log('Error fetching data, ', e);
//});

//database
//.ref()
//.set({
//name: 'Jorge Murillo',
//age: 33,
//stressLevel: 5,
//job: {
//title: 'Software Developer',
//company: 'Little Nice Company'
//},
//location: {
//city: 'La Ceiba',
//country: 'Honduras'
//}
//})
//.then(() => {
//console.log('Data is saved!');
//})
//.catch(err => {
//console.log('This failed, ', err);
//});

//database.ref().update({
//stressLevel: 9,
//'job/company': 'Amazon',
//'location/city': 'Seattle'
//});

//database
//.ref()
//.remove()
//.then(() => {
//console.log('Data was removed.');
//})
//.catch(err => {
//console.log('Data was not removed!', err);
//});
