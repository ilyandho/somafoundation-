import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  message = new FormGroup({
    email: new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
    textMessage: new FormControl("", Validators.required)
  });
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log("Message:", this.message);
    console.log("Value:", this.message.value);
  }
}
