// Init user module
const userM = User.getInstance();

class UI {
    constructor () {
        this.login = document.querySelector('.login');
        this.authorized = document.querySelector('.authorized');
        this.roomsList = document.querySelector('.rooms-list');
        this.usersList = document.querySelector('.users-list');
        this.messageContainer = document.querySelector('.message-container');
        this.userName = document.querySelector('.user-name');
        this.location = document.querySelector('.location');
    }

    showLogin() {

    }

    hideLogin() {
        this.login.style.display = 'none';
    }

    showAuthorized() {
        this.authorized.style.display = 'block';
    }

    hideAuthorized() {

    }

    setUserName(name) {
        this.userName.innerText = name;
    }

    showRoom(room) {
        this.location.innerText= '';
        this.location.innerText= `List of ${room} users`
    }

    generateRooms(rooms) {
        this.roomsList.innerHTML = '';
        rooms.forEach((room, index) => this.roomsList.insertAdjacentHTML("beforeend", UI.roomsListTemplate(room, index)));
    }

    generateUsersInRoom(users) {
        this.usersList.innerHTML = '';
        users.forEach(user => this.usersList.insertAdjacentHTML("beforeend", UI.userListTemplate(user)));
    }

    addMessage(message) {
        this.messageContainer.insertAdjacentHTML("beforeend", UI.messageTemplate(message));
    }

    newUserJoin(name) {
        this.messageContainer.insertAdjacentHTML("beforeend", UI.newUserJoinTemplate(name));
    }

    userLeft(user) {
        this.messageContainer.insertAdjacentHTML("beforeend", UI.userLeftTemplate(user));
    }

    static userLeftTemplate(user) {
        return `
                <div class="card teal lighten-2">
                    <div class="card-content white-text">
                        <p>Has left the room: ${user}</p>
                    </div>
                </div>
        `;
    }

    static newUserJoinTemplate(name) {
        return `
                <div class="card teal lighten-2">
                    <div class="card-content white-text">
                        <p>New user: ${name} joined chat</p>
                    </div>
                </div>
        `;
    }

    static roomsListTemplate(room, index) {
        return `
            <li><a href="#" class="waves-effect" data-room-index="${index}">${room}</a></li>
        `;
    }

    static userListTemplate({name, id}) {
        return `
            <li class="collection-item" data-user-id="${id}">${name}</li>
        `;
    }

    static messageTemplate(msg) {
        let param = {};
        if (userM.getUser().name == msg.username) {
            param.author = 'message from';
            param.color = 'light-blue darken-1';
        } else {
            param.author = 'message to';
            param.color = 'blue-grey darken-1';
        };

        return `
            <div class="${param.author}">
                <div class="card ${param.color}">
                    <div class="card-content white-text">
                        <p>${msg.message}</p>
                    </div>
                </div>
            </div>
        `;
    }
}
