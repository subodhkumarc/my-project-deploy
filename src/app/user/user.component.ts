import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // validationMessages = {
    //   'fullName': {
    //     'required': 'Full Name is required.',
    //     'minlength': 'Full Name must be greater than 2 characters.',
    //     'maxlength': 'Full Name must be less than 10 characters.'
    //   },
    //   'email': {
    //     'required': 'Email is required.',
    //     'emailDomain': 'Email domian should be dell.com'
    //   },
    //   'confirmEmail': {
    //     'required': 'Confirm Email is required.',
    //   },
    //   'emailGroup': {
    //     'emailMismatch': 'Email and Confirm Email do not match',
    //   },
    //   'phone': {
    //     'required': 'Phone is required.'
    //   },
    //   // 'skillName': {
    //   //   'required': 'Skill Name is required.',
    //   // },
    //   // 'experienceInYears': {
    //   //   'required': 'Experience is required.',
    //   // },
    //   // 'proficiency': {
    //   //   'required': 'Proficiency is required.',
    //   // },
    // };
  }

}
