import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoDataBrasil'
})
export class FormatoDataBrasilPipe implements PipeTransform {

  transform(value: Date, args?: any): any {
    return new Intl.DateTimeFormat('pt-BR').format(value);
  }

}
