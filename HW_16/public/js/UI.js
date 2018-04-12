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

    generateRooms(rooms) {
        rooms.forEach(room => this.roomsList.insertAdjacentHTML("beforeend", UI.roomsListTemplate(room)));
    }

    generateUsersInRoom(users) {
        this.usersList.innerHTML = '';
        for (let user in users) {
            this.usersList.insertAdjacentHTML("beforeend", UI.userListTemplate(user, users[user].id));
        }
    }

    addMessage(message) {
        this.messageContainer.insertAdjacentHTML("beforeend", UI.messageTemplate(message));
    }

    newUserJoin(name) {
        this.messageContainer.insertAdjacentHTML("beforeend", UI.newUserJoinTemplate(name));
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

    static roomsListTemplate(room) {
        return `
            <li><a href="#" class="waves-effect">${room}</a></li>
        `;
    }

    static userListTemplate(name, id) {
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
