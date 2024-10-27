import { Component } from '@angular/core';
import { TitleComponent } from "./title/title.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
