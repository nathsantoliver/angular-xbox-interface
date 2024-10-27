import { Component } from '@angular/core';
import { GameComponent } from "./game/game.component";

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [GameComponent],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class FavoriteComponent {

}
