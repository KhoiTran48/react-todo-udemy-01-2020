import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database};

// database.ref("notes").set({
//     id_1:{
//         name: 1
//     },
//     id_2:{
//         name: 2
//     }
// })

// database.ref("notes").push({name: 1})
// database.ref("abc").push("abc")

// database.ref("notes").update({location: {name: 4}})
// const notes = [];
// database.ref("notes")
//     .once("value")
//     .then((snapshot)=>{
//         snapshot.forEach((child)=>{
//             notes.push({
//                 id: child.key,
//                 ...child.val()
//             })
//         })
//         console.log(notes)
//     })
//     .catch((e)=>{
//         console.log("Error: ", e)
//     })

    

// const onValueChange = database.ref().on("value", (snapshot)=>{
//     console.log(snapshot.val())
// })

// const onValueChange2 = database.ref().on("value", (snapshot)=>{
//     const val = snapshot.val();
//     console.log(val, 2)
// })

// database.ref().off(onValueChange1)


// database.ref().set({
//     name: "Khoi Tran",
//     isSingle: "undefined",
//     age: 20,
//     location: {
//         city: "HCM",
//         country: "VN"
//     }
// })

// database.ref("age").set(30);
// database.ref("location/city").set("HN");
// database.ref("location/district").set(2)
// database.ref("laptop").set({
//     laptop: 1,
//     screen: 1
// })


// database.ref("isSingle").remove().then(()=>console.log("Remove success"), (e)=>console.log("Error", e));

// database.ref().update({
//     gender: true,
//     'location/city': "DN"
// })

// database.ref().update({
//     location: "new"
// })