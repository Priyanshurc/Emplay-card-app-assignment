// card-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardService } from '../../services/card.service';
import { Card } from '../../models/card.model';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { EditCardModalComponent } from '../edit-card-modal/edit-card-modal.component';
import { CardComponent } from '../card/card.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, CardComponent, MatButtonModule, MatDialogModule],
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  cards$!: Observable<Card[]>;

  constructor(private cardService: CardService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.cards$ = this.cardService.getCards();
  }

  addCard(): void {
    const newCard: Partial<Card> = {
      title: 'New Card',
      description: 'Created via addCard()'
    };
    this.cardService.addCard(newCard);
  }

  deleteCard(id: number): void {
    this.cardService.deleteCard(id);
  }

  editCard(card: Card): void {
    const dialogRef = this.dialog.open(EditCardModalComponent, {
      data: { ...card }
    });

    dialogRef.afterClosed().subscribe((result: Card) => {
      if (result) {
        this.cardService.updateCard(result);
      }
    });
  }
}
