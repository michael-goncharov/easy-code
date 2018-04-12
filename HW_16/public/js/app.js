// Init socket
const socket = io();

// Init user module
const userModule = User.getInstance();

// Init UI
const ui = new UI();

// Init elements
const loginForm = document.forms['login-form'];
const userName = loginForm.elements['username'];
const messageForm = document.forms['send-message'];
const message = messageForm.elements['message'];

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (userName.value) {
        const name = userName.value;
        socket.emit('new user', name);
        userModule.setUser({name});
        ui.setUserName(name);
    }
});

messageForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (message.value) {
        socket.emit('message', message.value);
        message.value = '';
    }
})

// Socket addEventListener
socket.on('welcome', room => {
    ui.hideLogin();
    ui.showAuthorized();
});
socket.on('rooms', rooms => ui.generateRooms(rooms)); // получили все комнаты
socket.on('updateusers', users => ui.generateUsersInRoom(users)); // получили всех пользователей
socket.on('chat message', message => ui.addMessage(message)); //
socket.on('new user joined',  user => ui.newUserJoin(user)); //
