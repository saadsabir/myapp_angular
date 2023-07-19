import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { User } from 'src/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

    user: User = {} as User

    constructor(private route: ActivatedRoute, private userService: UserService) { }

    ngOnInit(): void {
        /*this.route.params.subscribe((paramsUrl: Params) => {
            const id = paramsUrl['id']
            this.userService.get(id).subscribe((user: User) => {
                this.user = user
            })
                    })*/
        //console.log(id)
        //plus propre : 
        this.route.params
            .pipe(
                switchMap((paramsUrl: Params) => {
                    const id = paramsUrl['id']
                    return this.userService.get(id)
                })
            )
            .subscribe((user: User) => {
                this.user = user
            })
            //il faut detruire l'observable qui ne se termine pas type .interval
            //ca ne sert a rien de se desinscrire d'une requete comme la dessus
    }
}