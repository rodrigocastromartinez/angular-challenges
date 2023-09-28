import { Component } from '@angular/core';
// Initialization for ES Users
import {
  Collapse,
  Ripple,
  initTE,
} from "tw-elements";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  ngOnInit() {
    initTE({ Collapse, Ripple });
  }

}
