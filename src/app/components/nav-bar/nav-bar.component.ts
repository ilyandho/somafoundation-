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
  toggleNav(event) {
    event.target.classList.toggle("change");
    const childNoes = event.target.children;
    event.target.children.style.opacity = 0;
  }
}
