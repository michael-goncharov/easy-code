const User = (function () {

    let currentUser = {};
    let instance;

    const getUser = function () {
        return currentUser;
    }

    const setUser  = function (user) {
        currentUser = user;
        return currentUser;
    }

    const createInstance = function () {
        return {
            getUser,
            setUser
        }
    }

    return {
        getInstance: function () {
            return instance || (instance = createInstance());
        }
    }

}());
