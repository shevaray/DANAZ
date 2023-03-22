import { Component, OnInit } from "@angular/core";
import { MENU } from "src/app/core/configs/menu.config";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  navbarLogo: string = "assets/navbar/navbar-logo.svg";
  options = [...MENU];
  menuIconType: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onSwitchMenuIcon() {
    this.menuIconType = !this.menuIconType;
  }
}
