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
const roomList = document.querySelector('.rooms-list');

// Init local var
let currentRoom;

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

roomList.addEventListener('click', function (e) {
    if (e.target.dataset.roomIndex) {
        let index = e.target.dataset.roomIndex;
        socket.emit('roomchange', index);
        $('.sidenav').sidenav('close');
    }
})

// Socket addEventListener
socket.on('welcome', room => {
    currentRoom = room;
    ui.hideLogin();
    ui.showAuthorized();
    ui.showRoom(currentRoom);
});
socket.on('rooms', rooms => ui.generateRooms(rooms)); // получили все комнаты
socket.on('chat message', message => ui.addMessage(message)); //
socket.on('new user joined',  user => ui.newUserJoin(user)); //
socket.on('roommates',  ({usernames}) => {
    let users = Object.keys(usernames)
        .filter(user => usernames[user].room === currentRoom)
        .map(user => {
            usernames[user].name = user;
            return usernames[user];
        })
    ui.generateUsersInRoom(users)
}); //
socket.on('has left the room',  user => ui.userLeft(user)); //
