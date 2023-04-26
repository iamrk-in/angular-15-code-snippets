import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name: 'exampleConverter'
})

export class ExampleConverterPipe implements PipeTransform {
    transform(value: number, unit: string) {
        if(value && !isNaN(value)) {
            if(unit === 'C') {
                var temparature = (value - 32) / 1.8;
                return temparature.toFixed(2);
            } else if(unit === 'F') {
                var temparature = (value * 1.8) + 32;
                return temparature.toFixed(2)
            }
        }
        return;
    }
}