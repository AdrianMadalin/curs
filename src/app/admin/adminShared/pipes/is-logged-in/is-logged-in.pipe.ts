import {Pipe, PipeTransform} from "@angular/core";
import {UserService} from "../../user.service";

@Pipe({
    name: "myIsLoggedIn"
})

export class IsLoggedInPipe implements PipeTransform {
    constructor(private userService: UserService) {

    }

    transform(value: any, ...args: any[]): any {
        console.log(this.userService.loggedInUser);
        return !!this.userService.loggedInUser;
    }

}