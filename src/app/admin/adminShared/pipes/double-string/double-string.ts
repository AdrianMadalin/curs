import {Pipe, PipeTransform} from "@angular/core";
import {UserService} from "../../user.service";

@Pipe({
    name: "myStringRepeat"
})

export class DoubleString implements PipeTransform {
    constructor(private userService: UserService) {

    }

    transform(value: string, count: number): any {
        return value.repeat(count);
    }

//    add a json file to firebase
//     dir assets translations.json
//     translations.en.json
//     create a service pull the json in functie de cheie va returna valoarea tradusa
//     folosit prin pipe mytranslate care va primi cheia de traducere


}