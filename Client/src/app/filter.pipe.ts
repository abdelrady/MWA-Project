import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
    // pure: false
})
export class FilterPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        console.log({ 'value': value });
        console.log({ 'args': args });
        return value.filter(item => {
            return item.description.toLowerCase().includes(args) ||
                item.name.toLowerCase().includes(args)
        });
    }

}
