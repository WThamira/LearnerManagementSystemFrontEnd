import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms/forms";

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  personalDetail = {
    nic: "912082091V",
    fullName: "",
    shortName: "",
    address: "",
    mobileNomber: "",
    birthday: "",
    weight: 0,
    height: 0,
    gender: "",
  }

  onSubmit(form: NgForm) {
    console.log(this.personalDetail.nic);
  }


}
