import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../models/card.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() card!: Card;

  @Output() edit = new EventEmitter<Card>();
  @Output() delete = new EventEmitter<number>();

  showMore: boolean = false; 

  onEdit() {
    this.edit.emit(this.card);
  }

  onDelete() {
    this.delete.emit(this.card.id); 
  }

  toggleDescription(): void {
    this.showMore = !this.showMore;
  }

  get shortDescription(): string {
    if (this.card.description.length <= 50 || this.showMore) {
      return this.card.description;
    }
    return this.card.description.slice(0, 50) + '...';
  }
}
