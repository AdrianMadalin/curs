import {Pipe, PipeTransform} from "@angular/core";

@Pipe({"name": 'myTranslate'})
export class TranslatePipe implements PipeTransform {
    public mathch: Object = {};

    transform(value: any, lang: string): any {
        Object.keys(value).forEach((key) => {
            lang === key ? this.mathch = value[key] : null;
        });
        return this.mathch
    }
}