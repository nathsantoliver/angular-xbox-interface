import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FavoriteComponent } from "../../components/favorite/favorite.component";
import { ExploreComponent } from "../../components/explore/explore.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    FavoriteComponent,
    ExploreComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
