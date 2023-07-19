import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

    user: User = {} as User
    propName: FormControl = new FormControl()
    loading: boolean = false
    form: FormGroup = this.builder.group({
        name: this.propName,
        email: '',
        username: ''
    })

    constructor(private route: ActivatedRoute,
        private userService: UserService,
        private builder: FormBuilder) { }

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
                this.form.patchValue(user)
                this.user = user
            })
        //il faut detruire l'observable qui ne se termine pas ex : type .interval
        //ca ne sert a rien de se desinscrire d'une requete comme la dessus
    }

    updateUser() {
        this.userService
        .update(this.user.id, this.form.value)
        .subscribe((userModified: User) => {
            this.user = userModified
        })
    }
}