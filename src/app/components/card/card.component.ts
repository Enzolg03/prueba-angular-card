import { Component, OnInit} from '@angular/core';
import { CardService } from '../../service/card.service';
import { CommonModule } from '@angular/common';
import { CardFormComponent } from '../card-form/card-form.component';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, CardFormComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit{

constructor(private cardService: CardService){}
  
  cards: any[] = [];

  ngOnInit(): void {
    this.cardService.list()
    .subscribe((cards: any) =>{
      this.cards = cards;
    })
  }
  
}
