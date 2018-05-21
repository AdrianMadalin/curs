import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "myStringRepeat"
})

export class StringRepeatPipe implements PipeTransform {
    constructor() {
    }

    transform(value: string, count: number): any {
        return value.repeat(count);
    }
}