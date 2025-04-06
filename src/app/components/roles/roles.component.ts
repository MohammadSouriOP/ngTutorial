import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit {
  // firstName: String = 'Angular TUtorial';
  // angularVersion = 'Version 18';
  // version: Number = 18;
  // isActive: boolean = false;
  // currentDate = new Date();
  // inputType: string = 'button';
  // selectedState: string = '';

  // showWelcomeAlert() {
  //   alert("welcome to Angular 18 Tutorial")
  // }

  // showMessage(message: string) {
  //   alert(message)
  // }

  // constructor(private http:HttpClient){} (in the past)
  http = inject(HttpClient);
  roleList: IRole[] = [];
  ngOnInit(): void {
    this.getAllRoles();
  }
  getAllRoles() {
    this.http
      .get<APIResponseModel>('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles')
      .subscribe((res: APIResponseModel) => {
        this.roleList = res.data;
      });
  }
}
