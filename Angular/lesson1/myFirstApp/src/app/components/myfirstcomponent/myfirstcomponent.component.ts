import { Component } from "@angular/core";

@Component({
    selector: 'app-myfirstcomponent',
    templateUrl: './myfirstcomponent.component.html',
    styleUrls: ['./myfirstcomponent.component.css']
})

export class MyFirstComponent {
    name: string = 'Michael';
    user: User = {
        name: 'Michael'
    //    age: 40
    };

    users: User[] = [
        {
            name: 'Denis',
            age: 29
        },
        {
            name: 'Ivan',
            age: 30
        }
    ];

    show: boolean = false;

    imageUrl: string = 'http://lorempixel.com/400/200';

    disabled: boolean = true;

    constructor() {
        console.log(this.users);
        setTimeout(() => this.userNameChanges('+'), 1000);
        setTimeout(() => this.showToggle(), 2000);
        setTimeout(() => this.addUser(), 3000);
    }

    userNameChanges(symbol: string): User {
        this.user.name = this.user.name.toUpperCase() + symbol;
        return this.user;
    }

    showToggle() {
        this.show = !this.show;
    }

    addUser() {
        this.users.push({name: 'Default user', age: 18});
    }
}
