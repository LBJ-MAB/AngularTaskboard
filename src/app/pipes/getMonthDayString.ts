import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'getMonthDayString',
  standalone: true
})
export class GetMonthDayPipe implements PipeTransform {
  transform(date: string): string {
    let day = date.substring(0, date.indexOf("-"));
    let monthNum = parseInt(date.substring(date.indexOf("-") + 1, date.lastIndexOf("-")));
    let monthStringArray : string[] = [
      "January", "February", "March",
      "April", "May", "June",
      "July", "August", "September",
      "October", "November", "December"
    ];
    let monthString: string = monthStringArray[monthNum-1];
    return `${monthString} ${day}`;
  }
}
