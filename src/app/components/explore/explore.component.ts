import { Component } from '@angular/core';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent {

}
