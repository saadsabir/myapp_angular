import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, lastValueFrom } from "rxjs";
import { User } from "../interfaces/user";

@Injectable({
    providedIn: 'root' // tree-shaking
})
export class UserService {
    readonly url: string = 'https://jsonplaceholder.typicode.com/users'

    constructor(private http: HttpClient) {}

    /*getAll(): Observable<User[]> {
        return this.http.get<User[]>(this.url)
    }*/
    //ou bien avec promese
    getAll(): Promise<User[]> {
        /*return new Promise((resolve, reject) => {
            this.http.get<User[]>(this.url).subscribe({
                next: (users: User[]) => {
                    resolve(users)
                },
                error: (err) =>  {
                    reject(err)
                }
            })
        })*/
        //return this.http.get<User[]>(this.url).toPromise()
        return lastValueFrom(this.http.get<User[]>(this.url))
    }
}