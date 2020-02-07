import React from 'react'
import ReactDOM from 'react-dom'
import App, {history} from './app'
import {Provider} from 'react-redux'
import store from './store/configStore'
import {firebase} from './firebase/firebase'
import {login, logout} from './actions/auth'
import {setTaskApi} from './actions/taskAction'

console.log("test source map")
ReactDOM.render(
    <Provider store={store}>
        <App/> 
    </Provider>
,document.getElementById("app"))


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        store.dispatch(login(user.uid))
        store.dispatch(setTaskApi()).then(()=>{
            console.log("set task api")

            // phải dùng chung object history được pass vào Router trong app.js
            // đó là lý do tại sao cần export history trong app.js
            history.push("/dashboard")
        })
      console.log("log in");
    } else {
        store.dispatch(logout())
        console.log("log out")
        history.push("/")
    }
});