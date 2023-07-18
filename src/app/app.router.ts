import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: UsersComponent
    }
]

export const appRouter = RouterModule.forRoot(routes)