import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'findTodo'
})
export class FindTodoPipe implements PipeTransform {
  transform(value: string): string {
    // REALIZATION
    return value.toUpperCase()
  }
}
