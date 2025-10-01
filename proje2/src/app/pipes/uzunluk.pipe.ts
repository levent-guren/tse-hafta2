import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uzunluk',
  standalone: true
})
export class UzunlukPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (!value) {
      return '';
    }
    if (args.length < 1) {
      return value;
    }
    const maxLength = Number(args[0]);
    if (maxLength < 3) {
      return value;
    }
    let result = value;
    if (value.length > maxLength) {
      result = value.substring(0, maxLength - 3) + '...';
    }
    return result;
  }

}

