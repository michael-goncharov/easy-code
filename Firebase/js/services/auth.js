class Auth {
    async login(email, password) {
        await firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            return Promise.reject(errorMessage);
        });
    }
}
