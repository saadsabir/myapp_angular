import { Component, OnInit, OnDestroy, computed, effect, signal } from "@angular/core";
import { User } from "src/app/core/interfaces/user";
import { Subscription, interval } from "rxjs";
import { NgForm } from "@angular/forms";
import { UserService } from "src/app/core/services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit, OnDestroy {
  nbSelected: number = 0
  extSelected: string = ''
  extensions: string[] = ['tv', 'biz', 'io', 'me']
  loading: boolean = false
  subscription!: Subscription

  users = signal<User[]>([])
  usersExtensionBiz = computed(() => {
    return this.users().filter(user => user.email.endsWith('biz')).length
  })

  constructor(private userService: UserService) {
    effect(() => {
      console.log('signal !')
    })
  }

  async ngOnInit(): Promise<void> {
    /*this.userService.getAll().then((users: User[]) => {
       this.users = users
    })*/
    //this.users = await this.userService.getAll()
    this.users.set(await this.userService.getAll())
    this.subscription = interval(500).subscribe(console.log)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  createUser(form: NgForm) {
    if (form.invalid) return
    this.loading = true
    this.userService.create(form.value).subscribe((userCreated: User) => {
      //this.users().push(userCreated)
      this.users.set([ ...this.users(), userCreated ])
      // this.users = [ ...this.users(), userCreated ]
      this.loading = false
      form.resetForm()
    })
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe(() => {
      //const index = this.users().findIndex(user => user.id == id)
      //this.users().splice(index, 1)
      const users = this.users().filter(user => user.id != id)
      this.users.set(users)
      // this.users = users
    })
  }
}