import {Pipe, PipeTransform} from "@angular/core";
import {UserService} from "../../user.service";

@Pipe({
    name: "myIsLoggedIn"
})

export class IsLoggedInPipe implements PipeTransform {
    constructor(private userService: UserService) {
    }

    transform(value: any, ...args: any[]): any {
        return !!this.userService.loggedInUser;
    }

}