import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  personalDetail: any;
  constructor() { }

  ngOnInit() {
    this.personalDetail = {
      nic: "912082091V",
      fullName: "Wasala Mudiyanselage Nindara Kumbure Gedara Thamira Lakmal Weerakoon",
      shortName: "Thamira Lakmal",
      address: "Asiri,2nd mile post,Bogahamadiththa,Haliela",
      mobileNomber: "0714456755",
      birthday: "1991-7-26",
      height: 168,
      gender: "Male",
      weights: 50
    }
  }


  onSubmit(form: NgForm) {
    console.log(this.personalDetail);
  }


}
