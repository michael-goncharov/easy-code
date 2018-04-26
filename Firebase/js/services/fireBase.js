const Firebase = (function () {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyAv8HunIKSjyPxhqWWTTRWgCnOiVMvRuPI",
      authDomain: "mic-goncharov.firebaseapp.com",
      databaseURL: "https://mic-goncharov.firebaseio.com",
      projectId: "mic-goncharov",
      storageBucket: "mic-goncharov.appspot.com",
      messagingSenderId: "701629559879"
    };
    firebase.initializeApp(config);

    const db = firebase.firestore();

    let instance;

    const getDB = function () {
        return db
    }

    const createInstance = function () {
        return {
            getDB
        }
    }

    return {
        getInstance: function () {
            return instance || (instance = createInstance())
        }
    }
})()
