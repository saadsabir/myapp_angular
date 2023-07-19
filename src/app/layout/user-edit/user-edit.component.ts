import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
   constructor(private route: ActivatedRoute) {}

   ngOnInit(): void {
      this.route.params.subscribe((paramsUrl: Params) => {
         const id = paramsUrl['id']
         console.log(id)
      })
   }
}