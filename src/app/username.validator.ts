import {UsernameService} from "./username.service";
import {AbstractControl, ValidationErrors} from "@angular/forms";
import {map, switchMap} from "rxjs/operators";
import {Observable, of, timer} from "rxjs";

export class UsernameValidator {
    static createValidator(usernameService: UsernameService) {
        return (control: AbstractControl): Observable<ValidationErrors> => {
            return timer(500).pipe(
                switchMap(() => {
                    if (!control.value) {
                        return of(null)
                    }

                    return usernameService.isUsernameTaken(control.value).pipe(
                        map(isTaken => (isTaken ? { usernameTaken: true } : null))
                    );
                })
            )
        }
    }
}
