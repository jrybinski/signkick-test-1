import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsernameService {
  private _existing = [
    'bob',
    'mike',
    'john'
  ];

  isUsernameTaken(username: string): Observable<boolean> {
    const randomDelay = Math.random() * 100;
    return of(this._existing.indexOf(username) >= 0).pipe(
      delay(randomDelay)
    )
  }
}
