import { Component } from '@angular/core';
import { UserComponent } from "./user/user.component";
import { MenuComponent } from "./menu/menu.component";
import { InfoComponent } from "./info/info.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [UserComponent, MenuComponent, InfoComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
