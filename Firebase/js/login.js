// Auth init
const auth = new Auth();

auth.login('mcmichael3@mail.ru', 'testPass').catch(({code, message}) => console.log(code, message));

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        console.log(user);
        var email = user.email;
        // ...
      } else {
    // User is signed out.
    // ...
      }
});
