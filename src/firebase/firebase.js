import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBs7NHjVSaXRBbvi3TNMU9stejUOvvNrFs",
    authDomain: "react-todo-udemy-01-2020.firebaseapp.com",
    databaseURL: "https://react-todo-udemy-01-2020.firebaseio.com",
    projectId: "react-todo-udemy-01-2020",
    storageBucket: "react-todo-udemy-01-2020.appspot.com",
    messagingSenderId: "292762406593",
    appId: "1:292762406593:web:54bdb34f3cf100f85a0e40",
    measurementId: "G-FJQRH5B6LZ"
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


