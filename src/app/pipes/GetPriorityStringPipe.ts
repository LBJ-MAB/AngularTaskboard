import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'getPriorityString',
  standalone: true
})
export class GetPriorityStringPipe implements PipeTransform {
  transform(priorityValue?: number): string {
    console.log(priorityValue);
    let priorityString: string;
    switch(priorityValue) {
      case 1:
        priorityString = "Priority: High";
        break;
      case 2:
        priorityString = "Priority: Medium";
        break;
      case 3:
        priorityString = "Priority: Low";
        break;
      default:
        priorityString = '';
        break;
    }
    return priorityString;
  }
}
