import { Component } from "@angular/core";

@Component({
    selector: 'app-mysecondcomponent',
    templateUrl: './mysecondcomponent.component.html',
    styleUrls: ['./mysecondcomponent.component.css']
})

export class MySecondComponent {

    person: Person = {
         name: 'Michael',
         age: 40,
         gender: 'male'
        };

    jobs: Job[] = [
        {
            title: 'job1',
            year: 2000
        },
        {
            title: 'job2',
            year: 2005
        },
        {
            title: 'job3',
            year: 2010
        },
        {
            title: 'job4',
            year: 2015
        }
    ];

    imageUrl: string = 'https://picsum.photos/200';
    changesFlag: boolean = false;

    constructor() {
        console.log(this.jobs);
        setTimeout(() => this.addJob(), 2000);
    }

    addJob() {
        this.changesFlag = true;
        this.jobs.push({title: 'current job', year: 2018});
    }

}
