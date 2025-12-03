import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'getShortenedDescription',
  standalone: true
})
export class GetShortenedDescriptionPipe implements PipeTransform {
  transform(description?: string): string {
    let shortenedDescription: string;
    if (description && description.length > 50) {
      shortenedDescription = description.substring(0, 50);
      shortenedDescription += "...";
      return shortenedDescription;
    }
    return description ?? "";
  }
}
