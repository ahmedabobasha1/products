import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countStock'
})
export class CountStockPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value <= 0 ? "out of stock" : "in stock" ;
  }

}
