import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  // Add the class to give the effect icon
  toggleNav(event: any) {
    event.target.classList.toggle("close");
    if (event.target.classList.contains("close")) {
      console.log("Closed");
    } else {
      console.log("Open");
    }
  }
}
