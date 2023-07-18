import { Component, OnInit, computed, effect, signal } from "@angular/core";
import { User } from "src/app/core/interfaces/user";
import { UserService } from "src/app/core/services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit {
  nbSelected: number = 0
  extSelected: string = ''
  extensions: string[] = ['tv', 'biz', 'io', 'me']

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
  }

  createUser() {
    this.userService.create({
      name: 'ana',
      email: 'ana@gmail.biz'
    }).subscribe((userCreated: User) => {
      //this.users().push(userCreated)
      this.users.set([ ...this.users(), userCreated ])
      // this.users = [ ...this.users(), userCreated ]
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