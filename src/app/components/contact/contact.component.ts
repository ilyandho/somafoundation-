import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  message = new FormGroup({
    email: new FormControl("", Validators.required),
    subject: new FormControl("", Validators.required),
    textMessage: new FormControl("", Validators.required)
  });
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onSubmit() {
    console.log("Message:", this.message);
    console.log("Value:", this.message.value);
    // this.http.get();

    this.http
      .post("http://localhost:8080/email", this.message.value)
      .subscribe(() => {
        console.log("Message sent");
      });
  }
}
