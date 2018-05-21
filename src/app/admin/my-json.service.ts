import {Injectable, OnInit} from "@angular/core";

const seedData = require('./seed-data.json');

@Injectable()
export class MyJsonService implements OnInit {

    constructor() {

    }

    ngOnInit(): void {
    }

    getData() {
        console.log(seedData);
        return seedData;
    }

}